import { Button } from "@/components/ui/button";
import { Education, EducationStream, ToastTypes } from "@/constants/enumValues";
import { getSuccessMessage } from "@/constants/getMessages";
import { useToast } from "@/hooks/use-toast";
import {
  getAuthLoadingStatus,
  getAuthSuccessCode,
  getUserDetailPopupStatus,
} from "@/services/redux/selectors/authSelector";
import {
  clearStatusCode,
  submitUserDetailsRequest,
} from "@/services/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/services/redux/store";
import { UICheckbox } from "@/ui-kit/checkbox";
import { FloatingInput } from "@/ui-kit/floating-input";
import { FloatingSelect } from "@/ui-kit/floating-select";
import { FloatingTextArea } from "@/ui-kit/floating-textarea";
import PopupModal from "@/ui-kit/popup-modal";
import { Text, TextVariant } from "@/ui-kit/text";
import { enumToArray } from "@/utils/commonFunction";
import { userDetailSchema } from "@/utils/schemas";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { setShowUserDetailPopup } from "../../../services/redux/slices/authSlice";
import { Loader2 } from "lucide-react";

function UserDetailPopup() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const successCode = useAppSelector(getAuthSuccessCode);
  const modalOpen = useAppSelector(getUserDetailPopupStatus);
  const loading = useAppSelector(getAuthLoadingStatus);

  const [consent, setConsent] = useState<boolean>(false);

  const modalClose = () => {
    dispatch(setShowUserDetailPopup(false));
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    isValid,
  } = useFormik({
    initialValues: {
      full_name: "",
      mobile_number: "",
      education: "",
      stream: "",
      city: "",
      help: "",
    },
    validationSchema: userDetailSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (successCode === "S-10001") {
      toast({
        description: getSuccessMessage(successCode),
        variant: ToastTypes.SUCCESS,
      });
      dispatch(setShowUserDetailPopup(false));
    }
    dispatch(clearStatusCode());
  }, [successCode]);

  const handleSubmit = () => {
    const payload = {
      ...values,
      education: Number(values.education),
      stream: Number(values.stream),
    };
    dispatch(submitUserDetailsRequest(payload));
  };

  return (
    <PopupModal
      popupOpen={modalOpen}
      popupClose={modalClose}
      titleMiddleChildren={
        <div className="w-full px-5 rounded-tr-md rounded-br-md py-3">
          <Text
            variant={TextVariant.D36}
            className="px-4 font-lora font-semibold text-center text-primaryText"
          >
            Ready to Start Your Pilot Journey?
          </Text>

          <Text
            variant={TextVariant.D20}
            className="font-lora text-center font-bold text-foreground"
          >
            Get a free counselling call with a licensed pilot. We’ll help you
            plan your DGCA pathway, exams, and medicals.
          </Text>
        </div>
      }
      noCloseIcon={false}
      popupContClass="md:min-w-[35%] xl:min-w-[40%] mx-5 md:mx-0 md:p-0 max-h-[95%] overflow-y-auto"
    >
      <div className="flex flex-col justify-center items-center space-y-5">
        <FloatingInput
          name="full_name"
          floatingLabel="Full Name"
          placeholder="enter full name"
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          touched={touched?.full_name}
          value={values?.full_name}
          error={errors?.full_name}
          alphabetOnly={true}
          className="w-full md:w-[70%]"
        />
        <FloatingInput
          name="mobile_number"
          floatingLabel="Mobile Number"
          placeholder="enter whatsapp mobile number "
          value={values?.mobile_number}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched?.mobile_number}
          error={errors?.mobile_number}
          required
          numberOnly
          maxLength={10}
          className="w-full md:w-[70%]"
        />
        <FloatingSelect
          name="stream"
          data={enumToArray(EducationStream)}
          value={values?.stream}
          onBlur={handleBlur}
          touched={touched.stream}
          error={errors.stream}
          setFieldValue={setFieldValue}
          className="w-full md:w-[70%]"
          placeholder="select stream"
          floatingLabel="Stream"
          required
        />
        <FloatingSelect
          name="education"
          data={enumToArray(Education)}
          value={values?.education}
          onBlur={handleBlur}
          touched={touched.education}
          error={errors.education}
          setFieldValue={setFieldValue}
          className="w-full md:w-[70%]"
          placeholder="have you finished class 12?"
          floatingLabel="Education"
          required
        />
        <FloatingInput
          name="city"
          floatingLabel="City"
          placeholder="enter city"
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          touched={touched?.city}
          value={values?.city}
          error={errors?.city}
          alphabetOnly={true}
          className="w-full md:w-[70%]"
        />
        <FloatingTextArea
          name="help"
          placeholder="how can we help?"
          value={values?.help}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched?.help}
          error={errors?.help}
          required={true}
          className="w-full md:w-[70%]"
          textHeightClass="h-[100px]"
          floatingLabel="Help"
        />
        <div className="flex justify-start w-full md:w-[70%]">
          <UICheckbox
            name="consent"
            label="I agree to be contacted via phone/WhatsApp/email"
            value={consent}
            onChange={(name: string, checked: boolean) => {
              setConsent(checked);
            }}
          />
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary mb-5 text-primary-foreground hover:bg-primary-dark shadow-hero animate-fade-in"
            style={{ animationDelay: "300ms" }}
            onClick={handleSubmit}
            disabled={!isValid || !consent || loading}
          >
            {loading ? (
              <div className="flex gap-3 items-center">
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting
              </div>
            ) : (
              "Book My Free Call"
            )}
          </Button>
        </div>
      </div>
    </PopupModal>
  );
}

export default UserDetailPopup;
