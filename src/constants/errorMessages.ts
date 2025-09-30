import { APIMessages } from "@/interface/common-interface";


export const errorMessage: APIMessages = {
  'E-10001': {
    key: 'server_issue',
    message: 'Oops! Something went wrong. Please try later...',
    type: 'Generic'
  },
  'E-10002': {
    key: 'email_id',
    message: 'Please enter your registered email id',
    type: 'field_value'
  },
  'E-10003': {
    key: 'email_id_invalid',
    message: 'Please enter a valid email id',
    type: 'field_value'
  },
  'E-10004': {
    key: 'user_not_found',
    message: 'User with the given email not found. Please use the registered email to login',
    type: 'field_value'
  },
  'E-10005': {
    key: 'account_inactive',
    message: 'Your account is not active. Please contact the admin',
    type: 'account_status'
  },
  'E-10006': {
    key: 'otp_missing',
    message: 'Please enter the OTP',
    type: 'field_value'
  },
  'E-10007': {
    key: 'otp_incorrect',
    message: 'You have submitted an incorrect OTP',
    type: 'validation_error'
  },
  'E-10008': {
    key: 'otp_expired',
    message: 'You have submitted an expired OTP',
    type: 'validation_error'
  },
  'E-10009': {
    key: 'email_professional',
    message: 'Please enter the professional email id',
    type: 'field_value'
  },
  'E-10010': {
    key: 'token_invalid',
    message: 'Invalid or expired token',
    type: 'auth_error'
  },
  'E-10011': {
    key: 'token_used',
    message: 'Token has been used or revoked',
    type: 'auth_error'
  },
  'E-10012': {
    key: 'user_not_found',
    message: 'User not found!',
    type: 'field_value'
  },
  'E-10013': {
    key: 'sso_token_invalid',
    message: 'Invalid or expired SSO token',
    type: 'auth_error'
  },
  'E-10014': {
    key: 'account_inactive_superadmin',
    message: 'Your account is in inactive status. Please contact the super admin',
    type: 'account_status'
  },
  'E-10015': {
    key: 'invalid_email',
    message: 'Please enter the valid email id',
    type: 'field_value'
  },
  'E-10016': {
    key: 'unauthorized-access',
    type: 'Field level',
    message: 'Unauthorized Access! Sorry, we could not verify the user'
  },
  'E-10017': {
    key: 'user_status',
    type: 'Field level',
    message: 'Your auth token has been expired. Please login again'
  },
  'E-10018': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please enter Company name'
  },
  'E-10019': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please enter email domains'
  },
  'E-10020': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please enter company website'
  },
  'E-10021': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please select start date'
  },
  'E-10022': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please select end date'
  },
  'E-10023': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please select type of login'
  },
  'E-10024': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please enter session time out'
  },
  'E-10025': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please select a module'
  },
  'E-10026': {
    key: 'find-client',
    type: 'Field level',
    message: 'No clients found!'
  },
  'E-10027': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Company name already exists'
  },
  'E-10028': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Email domains already exists'
  },
  'E-10029': {
    key: 'info-sub',
    type: 'Field level',
    message: 'Please enter primary contact name'
  },
  'E-10030': {
    key: 'find-user',
    type: 'Field level',
    message: 'User not found!'
  },
  'E-10031': {
    key: 'widget-title',
    type: 'Field level',
    message: 'Please enter widget title'
  },

  'E-10032': {
    key: 'widget-description',
    type: 'Field level',
    message: 'Please enter widget description'
  },

  'E-10033': {
    key: 'widget-rows',
    type: 'Field level',
    message: 'Please enter rows in between 1 to 12'
  },

  'E-10034': {
    key: 'widget-columns',
    type: 'Field level',
    message: 'Please enter columns in between 1 to 12'
  },

  'E-10035': {
    key: 'widget-select',
    type: 'Field level',
    message: 'Please select a widget module'
  },

  'E-10036': {
    key: 'select-filter',
    type: 'Field level',
    message: 'Please select filter option'
  },

  'E-10037': {
    key: 'select-fieldtype',
    type: 'Field level',
    message: 'Please select field type option'
  },

  'E-10038': {
    key: 'find-widget',
    type: 'Field level',
    message: 'No widgets found!'
  },

  'E-10039': {
    key: 'create-widget',
    type: 'Field level',
    message: 'Unable to create widget'
  },

  'E-10040': {
    key: 'update-widget',
    type: 'Field level',
    message: 'Unable to update widget'
  },

  'E-10041': {
    key: 'find-widget',
    type: 'Field level',
    message: 'Widget not found!'
  },

  'E-10042': {
    key: 'find-modules',
    type: 'Field level',
    message: 'No modules found!'
  },

  'E-10043': {
    key: 'landing-page',
    type: 'Field level',
    message: 'Error while create the landing page'
  },

  'E-10044': {
    key: 'home-page-data',
    type: 'Field level',
    message: 'Unable to fetch the home page data'
  },

  'E-10045': {
    key: 'no-access',
    type: 'Field level',
    message: 'You are not authorized to perform this action'
  },

  'E-10046': {
    key: 'word-count',
    type: 'Field level',
    message: 'Please enter a question with more than a words or less than 200 words'
  },
  'E-10047': {
    key: 'company-inactive',
    type: 'Field level',
    message: 'The company account is not active. Please contact the admin'
  },
  'E-10048': {
    key: 'agreement-notvalid',
    type: 'Field level',
    message: 'The company agreement is not active. Please contact the admin'
  },
  'E-10049': {
    key: 'not-urlbased',
    type: 'Field level',
    message:
      'The company associated with this email does not have an active agreement for URL-based login'
  },

  'E-10050': {
    key: 'not-otpbased',
    type: 'Field level',
    message:
      'The company associated with this email does not have an active agreement for OTP-based login'
  },

  'E-10051': {
    key: 'not-counsellors',
    type: 'api data',
    message: 'No Counsellors found!'
  },

  'E-10052': {
    key: 'not-phone',
    type: 'Field level',
    message: 'Please enter a valid indian phone number'
  },
  'E-10053': {
    key: 'not-date',
    type: 'Field level',
    message: 'Please enter a booking Date'
  },
  'E-10054': {
    key: 'not-date',
    type: 'Field level',
    message: 'Please select a Booking slot'
  },
  'E-10055': {
    key: 'not-date',
    type: 'Field level',
    message: 'You are not authorized to perform this action'
  },
  'E-10056': {
    key: 'not-date',
    type: 'Field level',
    message: 'Booking already exists for the given slot'
  },
  'E-10057': {
    key: 'not-date',
    type: 'Field level',
    message: 'No Booking found!'
  },

  'E-10058': {
    key: 'not-select-company-logo',
    type: 'Field level',
    message: 'Please select company logo'
  },

  'E-10059': {
    key: 'not-date',
    type: 'Field level',
    message: 'counsellor id is required'
  },
  'E-10060': {
    key: 'find-user',
    type: 'Field level',
    message: 'Please enter first name'
  },
  'E-10061': {
    key: 'find-user',
    type: 'Field level',
    message: 'Please enter last name'
  },
  'E-10062': {
    key: 'find-user',
    type: 'Field level',
    message: 'Please select gender'
  },
  'E-10063': {
    key: 'find-user',
    type: 'Field level',
    message: 'Please select age range'
  },
  'E-10064': {
    key: 'find-user',
    type: 'Field level',
    message: 'The email address is already being used by another user'
  },
  'E-10065': {
    key: 'profile-image',
    type: 'Field level',
    message: 'Image size must be less than 5 MB!'
  },
  'E-10066': {
    key: 'Unable to find answer',
    type: 'Field level',
    message: 'No Answer found for this question'
  },
  'E-10067': {
    key: 'help-subject',
    type: 'Field level',
    message: 'Please enter subject'
  },
  'E-10068': {
    key: 'help-body',
    type: 'Field level',
    message: 'Please enter body with minimum 10 characters'
  },
  'E-10069': {
    key: 'find-user',
    type: 'Field level',
    message: "Oops! It seems we couldn't find that email address"
  },
  'E-10070': {
    key: 'find-user',
    type: 'Field level',
    message: 'No counsellor slots found!'
  },
  'E-10071': {
    key: 'find-user',
    type: 'Field level',
    message: 'Invalid slot time format'
  },
  'E-10072': {
    key: 'custom-url',
    type: 'Field level',
    message: 'Please enter URL'
  },
  'E-10073': {
    key: 'same-custom-url',
    type: 'Field level',
    message: 'The URL is already being used by another user'
  },
  'E-10074': {
    key: 'server-issue',
    type: 'Generic',
    message: "We're sorry, but there was a problem connecting to the network"
  },
  'E-10075': {
    key: 'server-issue',
    type: 'Generic',
    message: "We're sorry, but the server took too long to respond"
  },
  'E-10076': {
    key: 'url-notfound',
    type: 'Field level',
    message: 'URL not found!'
  },

  'E-10077': {
    key: 'date-issue',
    type: 'Field level',
    message: 'Selected date is within an existing range'
  },
  'E-10078': {
    key: 'find-courses',
    type: 'Field level',
    message: 'No Courses found!'
  },
  'E-10079': {
    key: 'course-enrolled',
    type: 'Field level',
    message: 'The user is already enrolled in course'
  },
  'E-10080': {
    key: 'course-enrolled',
    type: 'Field level',
    message: 'The user is not enrolled in this course'
  },
  'E-10081': {
    key: 'course-enrolled',
    type: 'Field level',
    message: 'No video playlist found!'
  },
  'E-10082': {
    key: 'future-date',
    type: 'Field level',
    message: 'Please enter only future date'
  },
  'E-10083': {
    key: 'future-date',
    type: 'Field level',
    message: 'Invalid URL! Please enter a valid URL'
  },
  'E-10084': {
    key: 'domain-not-recognaize',
    type: 'Field level',
    message: 'This email domain is not recognized. Use the correct domain to proceed.'
  },
  'E-10085': {
    key: 'user-count',
    type: 'Field level',
    message: 'Failed to retrieve user count'
  },
  'E-10086': {
    key: 'user-count',
    type: 'Field level',
    message: 'Failed to update user count'
  },
  'E-10087': {
    key: 'notification',
    type: 'Field level',
    message: 'Notifications not found'
  },
  'E-10088': {
    key: 'user-count',
    type: 'Field level',
    message: 'No User count list found!'
  },
  'E-10089': {
    key: 'FAQ-topic',
    type: 'Field level',
    message: 'Topic not found'
  },
  'E-10090': {
    key: 'FAQ-question',
    type: 'Field level',
    message: 'Failed to submit question. Please try again'
  },
  'E-10091': {
    key: 'Feature-id',
    type: 'Field level',
    message: 'feature_id is required for the request'
  },
  'E-10092': {
    key: 'action-id',
    type: 'Field level',
    message: 'action_id is required for the request'
  },
  'E-10093': {
    key: 'action-id',
    type: 'Field level',
    message: 'action_id is required for the request'
  },
  'E-10094': {
    key: 'calculator-id',
    type: 'Field level',
    message: 'calculator_id is required for the request'
  },
  'E-10095': {
    key: 'video-id',
    type: 'Field level',
    message: 'video_id is required for the request'
  },
  'E-10096': {
    key: 'navigation',
    type: 'Field level',
    message: 'navigation_url is required for the request'
  },
  'E-10097': {
    key: 'user-activity',
    type: 'Field level',
    message: 'Unable to add user activity'
  },
  'E-10098': {
    key: 'webinar-sessions',
    type: 'Field level',
    message: 'No webinar sessions found!'
  },
  'E-10099': {
    key: 'webinar-register',
    type: 'Field level',
    message: 'Unable to regiter this webinar session, try again later!'
  },
  'E-10100': {
    key: 'webinar-unregister',
    type: 'Field level',
    message: 'Unable to un-regiter this webinar session, try again later!'
  },
  'E-10101': {
    key: 'webinar-sessions',
    type: 'Field level',
    message: 'The webiner session has been already registered'
  },
  'E-10102': {
    key: 'webinar-sessions',
    type: 'Field level',
    message: 'The webiner session has been already un-registered'
  },
  'E-10103': {
    key: 'webinar-sessions',
    type: 'Field level',
    message: 'Please enter your name'
  },
  'E-10104': {
    key: 'category-id',
    type: 'Field level',
    message: 'Please enter a valid category Id'
  },
  'E-10105': {
    key: 'webinar',
    type: 'Field level',
    message: 'Please select valid webinar'
  },
  'E-10106': {
    key: 'videos',
    type: 'Field level',
    message: "We couldn't find any videos matching your search. Please try a different search term."
  },
  'E-10107': {
    key: 'videos',
    type: 'Field level',
    message: 'No video playlist found!'
  },
  'E-10108': {
    key: 'videos',
    type: 'Field level',
    message: 'Video playlist is inactive'
  },
  'E-10109': {
    key: 'videos',
    type: 'Field level',
    message: 'No videos found!'
  },
  'E-10110': {
    key: 'education',
    type: 'Field level',
    message: 'Please enter Education level'
  },
  'E-10111': {
    key: 'landing-page',
    type: 'Field level',
    message: 'No landing page found'
  },
  'E-10112': {
    key: 'landing-page',
    type: 'Field level',
    message: 'Landing page updation failed!'
  },
  'E-10113': {
    key: 'sub-category',
    type: 'Field level',
    message: 'No Sub-categories found!'
  },
  'E-10114': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter category name'
  },
  'E-10115': {
    key: 'streak-message',
    type: 'Field level',
    message: 'No streak message found!'
  },
  'E-10116': {
    key: 'answer',
    type: 'Field level',
    message: 'Incorrect answer. Please try again'
  },
  'E-10117': {
    key: 'module',
    type: 'Field level',
    message: "You don't have access to this module"
  },
  'E-10118': {
    key: 'profile',
    type: 'Field level',
    message:
      "You're not authorized to use profile, Kindly add your email in session code to access profile!"
  },
  'E-10119': {
    key: 'profile',
    type: 'Field level',
    message: 'No speakers found!'
  },
  'E-10120': {
    key: 'webinar',
    type: 'Field level',
    message: 'Please select webinar type'
  },
  'E-10121': {
    key: 'profile',
    type: 'Field level',
    message: 'Please enter webinar title '
  },
  'E-10122': {
    key: 'profile',
    type: 'Field level',
    message: 'Please select presenter name'
  },
  'E-10123': {
    key: 'FAQ',
    type: 'Field level',
    message: 'FAQ update failed'
  },
  'E-10124': {
    key: 'speaker',
    type: 'Field level',
    message: 'Please select Speaker name'
  },
  'E-10125': {
    key: 'date',
    type: 'Field level',
    message: 'Please select host date'
  },
  'E-10126': {
    key: 'time',
    type: 'Field level',
    message: 'Please select host time'
  },
  'E-10127': {
    key: 'webinar',
    type: 'Field level',
    message: 'Please enter webinar link'
  },
  'E-10128': {
    key: 'landing-page',
    type: 'Field level',
    message: 'Unable to fetch landing page details!'
  },
  'E-10129': {
    key: 'counselling',
    type: 'Field level',
    message: 'Invalid or missing counselling charge input'
  },
  'E-10130': {
    key: 'calculators',
    type: 'Field level',
    message: 'No calculators found!'
  },
  'E-10131': {
    key: 'counselling',
    type: 'Field level',
    message: 'Default counselling charge not found'
  },
  'E-10132': {
    key: 'Group',
    type: 'Field level',
    message: 'Group add failed'
  },
  'E-10133': {
    key: 'Group',
    type: 'Field level',
    message: 'Group update failed'
  },
  'E-10134': {
    key: 'FAQ',
    type: 'Field level',
    message: 'FAQ add failed'
  },
  'E-10135': {
    key: 'counselling-charge',
    type: 'Field level',
    message: 'Please enter minimum 0 or less then 100000'
  },
  'E-10136': {
    key: 'category',
    type: 'Field level',
    message: 'Subcategory add failed'
  },
  'E-10137': {
    key: 'category',
    type: 'Field level',
    message: 'Subcategory update failed'
  },
  'E-10138': {
    key: 'notification',
    type: 'Field level',
    message: 'Please enter notification preview message'
  },
  'E-10139': {
    key: 'notification',
    type: 'Field level',
    message: 'Please enter notification message'
  },

  'E-10140': {
    key: 'notification',
    type: 'Field level',
    message: 'Please select notification type'
  },
  'E-10141': {
    key: 'client',
    type: 'Field level',
    message: 'Please select client type'
  },
  'E-10142': {
    key: 'priority',
    type: 'Field level',
    message: 'Please select priority'
  },
  'E-10143': {
    key: 'clients',
    type: 'Field level',
    message: 'Please select atleast one client'
  },
  'E-10144': {
    key: 'notification',
    type: 'Field level',
    message: 'Please enter notification header'
  },
  'E-10145': {
    key: 'status',
    type: 'Field level',
    message: 'Please select status'
  },
  'E-10146': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter category name'
  },
  'E-10147': {
    key: 'category',
    type: 'Field level',
    message: 'No notifications found.'
  },
  'E-10148': {
    key: 'category',
    type: 'Field level',
    message: 'No configuration found for booking'
  },
  'E-10149': {
    key: 'category',
    type: 'Field level',
    message: 'Please select sub filter option'
  },
  'E-10150': {
    key: 'category',
    type: 'Field level',
    message: 'Sub filter value one required'
  },
  'E-10151': {
    key: 'category',
    type: 'Field level',
    message: 'Sub filter value two required'
  },
  'E-10152': {
    key: 'category',
    type: 'Field level',
    message: 'Date is required'
  },
  'E-10153': {
    key: 'category',
    type: 'Field level',
    message: 'Please upload video'
  },
  'E-10154': {
    key: 'category',
    type: 'Field level',
    message: 'Please select name condition'
  },
  'E-10155': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter name condition value'
  },
  'E-10156': {
    key: 'category',
    type: 'Field level',
    message: 'Please select availability'
  },
  'E-10157': {
    key: 'category',
    type: 'Field level',
    message: 'Please select specialization'
  },
  'E-10158': {
    key: 'category',
    type: 'Field level',
    message: 'Please select rating condition'
  },
  'E-10159': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter rating value'
  },
  'E-10160': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter rating start value'
  },
  'E-10161': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter rating end value'
  },
  'E-10162': {
    key: 'category',
    type: 'Field level',
    message: 'Please select language condition'
  },
  'E-10163': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter language value'
  },
  'E-10164': {
    key: 'category',
    type: 'Field level',
    message: 'Please select experience condition'
  },
  'E-10165': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter experience'
  },
  'E-10166': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter experience start'
  },
  'E-10167': {
    key: 'category',
    type: 'Field level',
    message: 'Please enter experience end'
  },
  'E-10168': {
    key: 'category',
    type: 'Field level',
    message: 'Please select featured'
  },
  'E-10169': {
    key: 'booking',
    type: 'payment failed',
    message: 'Booking Payment Failed'
  },
  'E-10170': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select topic condition'
  },
  'E-10171': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please enter topic condition value '
  },
  'E-10172': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select completion status'
  },
  'E-10173': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select course difficulty'
  },
  'E-10174': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select title condition'
  },
  'E-10175': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select title condition value'
  },
  'E-10176': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select registration status'
  },
  'E-10177': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select date'
  },
  'E-10178': {
    key: 'booking',
    type: 'payment failed',
    message: 'Please select date condition'
  },
  'E-10179': {
    key: 'booking',
    type: 'Amount failed',
    message: 'No Default configuration found!'
  },
  'E-10180': {
    key: 'widget',
    type: 'select widget',
    message: 'Please select widget type'
  },
  'E-10181': {
    key: 'webinar',
    type: 'name',
    message: 'Webinar name already exists'
  },
  'E-10182': {
    key: 'Speaker',
    type: 'Speaker',
    message: 'Speaker is busy at the given time'
  },
  'E-10183': {
    key: 'Signup',
    type: 'sign up',
    message: 'Your company is already registered please login'
  },
  'E-10184': {
    key: 'Invalid date',
    type: 'date',
    message: 'Please select valid date'
  },
  'E-10185': {
    key: 'sequence number',
    type: 'date',
    message: 'Please enter sequence number'
  },
  'E-10186': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch calculator all scheme category list!'
  },
  'E-10187': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch calculator scheme broad category list!'
  },
  'E-10188': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch calculator mutual fund company list!'
  },
  'E-10189': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch calculator mutual fund scheme list!'
  },
  'E-10190': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch rolling returns vs category calculator data!'
  },
  'E-10191': {
    key: 'Admin',
    type: 'Admin',
    message: 'No admins found'
  },
  'E-10192': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch rolling returns vs benchmark calculator data!'
  },
  'E-10193': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch Mutual Fund Portfolio Overlap calculator data!'
  },
  'E-10194': {
    key: 'calculator',
    type: 'calculator',
    message: 'Unable to fetch Mutual Fund SWP calculator data!'
  },
  'E-10195': {
    key: 'videos',
    type: 'videos',
    message: 'No E-Learning videos found !'
  },
  'E-10196': {
    key: 'playlist',
    type: 'playlist',
    message: 'Please enter play list name'
  },
  'E-10197': {
    key: 'playlist',
    type: 'playlist',
    message: 'Please select the playlist thumbnail.'
  },
  'E-10198': {
    key: 'video',
    type: 'video',
    message: 'Please enter video title'
  },
  'E-10199': {
    key: 'video',
    type: 'video',
    message: 'Please select the video thumbnail.'
  },
  'E-10200': {
    key: 'video',
    type: 'video',
    message: 'Please select a video to upload'
  },
  'E-10201': {
    key: 'video',
    type: 'video',
    message: 'Please enter video description'
  },
  'E-10202': {
    key: 'duration',
    type: 'duration',
    message: 'Please enter duration in seconds'
  },
  'E-10203': {
    key: 'keyword',
    type: 'keyword',
    message: 'Please enter keyword'
  },
  'E-10204': {
    key: 'user',
    type: 'user',
    message: 'End user update failed'
  },
  'E-10205': {
    key: 'calculator',
    type: 'calcualtor',
    message: 'Unable to fetch calculator common stocks across MF Schemes list!'
  },
  'E-10206': {
    key: 'calculator',
    type: 'calcualtor',
    message: 'This field is required for calculation!'
  },
  'E-10207': {
    key: 'section',
    type: 'section',
    message: 'No sections found.'
  },
  'E-10208': {
    key: 'partner',
    type: 'partner',
    message: 'Partner name already exist.'
  },
  'E-10209': {
    key: 'course',
    type: 'course',
    message: 'Please enter course name'
  },
  'E-10210': {
    key: 'course',
    type: 'course',
    message: 'Please enter description'
  },
  'E-10211': {
    key: 'course',
    type: 'course',
    message: 'Please select course thumbnail'
  },
  'E-10212': {
    key: 'course',
    type: 'course',
    message: 'Please enter section name'
  },
  'E-10213': {
    key: 'course',
    type: 'course',
    message: 'Please select section number'
  },
  'E-10214': {
    key: 'course',
    type: 'course',
    message: 'Please select assessment'
  },
  'E-10215': {
    key: 'course',
    type: 'course',
    message: 'Please enter chapter name'
  },
  'E-10216': {
    key: 'course',
    type: 'course',
    message: 'Please select chapter number'
  },
  'E-10217': {
    key: 'course',
    type: 'course',
    message: 'Please select content'
  },
  'E-10218': {
    key: 'course',
    type: 'course',
    message: 'No enrollments found.'
  },
  'E-10219': {
    key: 'course',
    type: 'course',
    message: 'Title is required'
  },
  'E-10220': {
    key: 'course',
    type: 'course',
    message: 'Question is required'
  },
  'E-10221': {
    key: 'assesment',
    type: 'assesment',
    message: 'Option 1 is required'
  },
  'E-10222': {
    key: 'assesment',
    type: 'assesment',
    message: 'Option 2 is required'
  },
  'E-10223': {
    key: 'assesment',
    type: 'assesment',
    message: 'Option 3 is required'
  },
  'E-10224': {
    key: 'assesment',
    type: 'assesment',
    message: 'Option 4 is required'
  },
  'E-10225': {
    key: 'assesment',
    type: 'assesment',
    message: 'Correct answer is required'
  },
  'E-10226': {
    key: 'assesment',
    type: 'assesment',
    message: 'No assessments found'
  },
  'E-10227': {
    key: 'session',
    type: 'session',
    message: 'The entered session code could not be verified. Please try again.'
  },
  'E-10228': {
    key: 'course',
    type: 'course',
    message: 'Section name already exists for the given course'
  },
  'E-10229': {
    key: 'course',
    type: 'course',
    message: 'No course chapter found'
  },
  'E-10230': {
    key: 'specialization',
    type: 'specialization',
    message: 'Please enter experience'
  },
  'E-10231': {
    key: 'specialization',
    type: 'specialization',
    message: 'Please select specialization'
  },
  'E-10232': {
    key: 'specialization',
    type: 'specialization',
    message: 'Please enter availability'
  },
  'E-10233': {
    key: 'specialization',
    type: 'specialization',
    message: 'Please enter brief profile'
  },
  'E-10234': {
    key: 'counsellor',
    type: 'counsellor',
    message: 'No counsellor found'
  },
  'E-10235': {
    key: 'counsellor',
    type: 'counsellor',
    message: 'No booking found'
  },
  'E-10236': {
    key: 'list',
    type: 'list',
    message: 'No list found'
  },
  'E-10237': {
    key: 'category',
    type: 'category',
    message: 'Please select category'
  },
  'E-10238': {
    key: 'user-enroll',
    type: 'user-enroll',
    message: 'A user already enrolled in the course'
  },
  'E-10239': {
    key: 'playlist',
    type: 'playlist',
    message: 'Playlist with the same name already exists'
  },
  'E-10240': {
    key: 'video-name',
    type: 'video-name',
    message: 'Video with the same name already exists'
  },
  'E-10241': {
    key: 'assessment',
    type: 'assessment',
    message: 'Unable to delete this assessment, because it was used in one of the courses'
  },
  'E-10242': {
    key: 'calculator data!',
    type: 'calculator data!',
    message: 'Unable to fetch Nps calculator data!'
  },
  'E-10243': {
    key: 'topic',
    type: 'topic',
    message: 'Please enter Topic of discussion'
  },
  'E-10244': {
    key: 'coupon-code',
    type: 'coupon-code',
    message: 'Please enter your coupon code'
  },
  'E-10245': {
    key: 'coupon-code',
    type: 'coupon-code',
    message: 'Invalid or expired coupon code'
  },
  'E-10246': {
    key: 'duration',
    type: 'duration',
    message: 'Please enter duration in minutes'
  },
  'E-10247': {
    key: 'profile',
    type: 'profile',
    message: "You're not authorized to use profile!"
  },
  'E-10248': {
    key: 'package',
    type: 'package',
    message: 'Please enter package title'
  },
  'E-10249': {
    key: 'package',
    type: 'package',
    message: 'Please select applicable to option'
  },
  'E-10250': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one module'
  },
  'E-10251': {
    key: 'package',
    type: 'package',
    message: 'Please select package start date'
  },
  'E-10252': {
    key: 'package',
    type: 'package',
    message: 'Please select package end date'
  },
  'E-10253': {
    key: 'package',
    type: 'package',
    message: 'Please enter package price'
  },
  'E-10254': {
    key: 'package',
    type: 'package',
    message: 'Please select paid to option'
  },
  'E-10255': {
    key: 'package',
    type: 'package',
    message: 'Package name already exists'
  },
  'E-10256': {
    key: 'package',
    type: 'package',
    message: 'Please select client/partner'
  },
  'E-10257': {
    key: 'package',
    type: 'package',
    message: 'Please enter no of coupon code'
  },
  'E-10258': {
    key: 'package',
    type: 'package',
    message: 'Package has expired coupon code'
  },
  'E-10259': {
    key: 'package',
    type: 'package',
    message: 'No coupon code found!'
  },
  'E-10260': {
    key: 'package',
    type: 'package',
    message: 'No package found!'
  },
  'E-10261': {
    key: 'package',
    type: 'package',
    message: 'Still some coupon are not used'
  },
  'E-10262': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one E-Learning courses'
  },
  'E-10263': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one calculator'
  },
  'E-10264': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one counselor category type'
  },
  'E-10265': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one webinar type'
  },
  'E-10266': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one knowledge base category'
  },
  'E-10267': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one video playlist'
  },
  'E-10268': {
    key: 'location',
    type: 'location',
    message: 'Please enter location'
  },
  'E-10269': {
    key: 'days',
    type: 'days',
    message: 'Please select available days'
  },
  'E-10270': {
    key: 'time',
    type: 'time',
    message: 'Please select available time'
  },
  'E-10271': {
    key: 'rating',
    type: 'rating',
    message: 'Please enter rating'
  },
  'E-10272': {
    key: 'permission',
    type: 'permission',
    message: "You don't have access!"
  },
  'E-10273': {
    key: 'time',
    type: 'time',
    message: 'Time range already exists'
  },
  'E-10274': {
    key: 'Assessment',
    type: 'Assessment',
    message: 'Assessment name already exists'
  },
  'E-10275': {
    key: 'Course',
    type: 'Course',
    message: 'Course name already exists'
  },
  'E-10276': {
    key: 'calculator',
    type: 'calculator',
    message: 'There is no data found for your given inputs!'
  },
  'E-10277': {
    key: 'name',
    type: 'name',
    message: 'Name already exists'
  },
  'E-10278': {
    key: 'Sequence',
    type: 'Sequence',
    message: 'Sequence number already exists'
  },
  'E-10279': {
    key: 'name',
    type: 'name',
    message: 'Unable to perform this action, because it is already in use'
  },
  'E-10280': {
    key: 'invalid address',
    type: 'invalid address',
    message: 'Unauthorized email address'
  },
  'E-10281': {
    key: 'duplicate widget name',
    type: 'duplicate widget name',
    message: 'Widget name already exists'
  },
  'E-10282': {
    key: 'package',
    type: 'package',
    message: 'Please select package level'
  },
  'E-10283': {
    key: 'package',
    type: 'package',
    message: 'This package already purchased, so unable to update'
  },
  'E-10284': {
    key: 'package',
    type: 'package',
    message: 'Package payment failed'
  },
  'E-10285': {
    key: 'package',
    type: 'package',
    message: 'Package is already subscribed'
  },
  'E-10286': {
    key: 'package',
    type: 'package',
    message: 'Unable to update, because it is already in use'
  },
  'E-10287': {
    key: 'package',
    type: 'package',
    message: 'Please make payment for the service'
  },
  'E-10288': {
    key: 'notification',
    type: 'notification',
    message: 'Unable to mark notifications as read'
  },
  'E-10289': {
    key: 'tasks',
    type: 'tasks',
    message: 'Unable to fetch tasks'
  },
  'E-10290': {
    key: 'tasks',
    type: 'tasks',
    message: 'Unable to fetch my tasks'
  },
  'E-10291': {
    key: 'tasks',
    type: 'tasks',
    message: 'Unable to add tasks'
  },
  'E-10292': {
    key: 'tasks',
    type: 'tasks',
    message: 'Unable to update task'
  },
  'E-10293': {
    key: 'image',
    type: 'image',
    message: 'Unable to upload image'
  },
  'E-10294': {
    key: 'image',
    type: 'image',
    message: 'Unable to delete image'
  },
  'E-10295': {
    key: 'page',
    type: 'page',
    message: 'Page id is required for the request'
  },
  'E-10296': {
    key: 'duplicate-section',
    type: 'duplicate-section',
    message: 'Section name already exists for this course'
  },
  'E-10297': {
    key: 'duplicate-chapter',
    type: 'duplicate-chapter',
    message: 'Chapter name already exists in this section.'
  },
  'E-10298': {
    key: 'tasks',
    type: 'tasks',
    message: 'No tasks have been added yet!'
  },
  'E-10299': {
    key: 'tasks',
    type: 'tasks',
    message: 'Some task Id Is already exists'
  },
  'E-10300': {
    key: 'max-size',
    type: 'max-size',
    message: 'Input data size is too large. Maximum allowed size is 20MB.'
  },
  'E-10301': {
    key: 'image',
    type: 'image',
    message: 'Image is required'
  },
  'E-10302': {
    key: 'token',
    type: 'token',
    message: 'Please enter JWT token key'
  },
  'E-10303': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one Fin-Guide category'
  },
  'E-10304': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one Employee Handbook category'
  },
  'E-10305': {
    key: 'package',
    type: 'package',
    message: 'Please select at least one Quick Access category'
  },
  'E-10306': {
    key: 'dashboard',
    type: 'dashboard',
    message: 'Unable to fetch admin dashboard data!'
  },
  'E-10307': {
    key: 'CTA',
    type: 'CTA',
    message: "No CTA's option found!"
  },
  'E-10308': {
    key: 'Notification',
    type: 'Notification',
    message: 'Notification header already exists'
  },
  'E-10309': {
    key: 'course',
    type: 'course',
    message: 'Course modification denied due to existing sections'
  },
  'E-10310': {
    key: 'url-course',
    type: 'url-course',
    message: 'Invalid Request. URL-based courses do not support this action'
  },
  'E-10311': {
    key: 'email',
    type: 'email',
    message: 'Your email id is already registered as part of your company'
  },
  'E-10312': {
    key: 'company',
    type: 'company',
    message: "The company doesn't have URL based otp login"
  },
  'E-10313': {
    key: 'email',
    type: 'email',
    message: 'Your email id already exists'
  },
  'E-10314': {
    key: 'email',
    type: 'email',
    message: 'The given mail id is not belongs to a user!'
  },
  'E-10315': {
    key: 'company',
    type: 'company',
    message: 'company_id is required'
  },
  'E-10316': {
    key: 'user',
    type: 'user',
    message: 'User not belongs to this company!'
  },
  'E-10317': {
    key: 'task',
    type: 'task',
    message: 'Please enter a valid task heading'
  },
  'E-10318': {
    key: 'task',
    type: 'task',
    message: 'Please enter a valid task description'
  },
  'E-10319': {
    key: 'CTA',
    type: 'CTA',
    message: 'CTA not found!'
  },
  'E-10320': {
    key: 'email',
    type: 'email',
    message: 'Email Id is missing!'
  },
  'E-10321': {
    key: 'phone',
    type: 'phone',
    message: 'Phone Number is missing!'
  },
  'E-10322': {
    key: 'CTA',
    type: 'CTA',
    message: 'Please select CTA logo'
  },
  'E-10323': {
    key: 'Task',
    type: 'Task',
    message: 'Task title already exists'
  },
  'E-10324': {
    key: 'login',
    type: 'login',
    message:
      'The company associated with this email has URL based otp login, kindly use that one for login'
  },
  'E-10325': {
    key: 'reminder',
    type: 'reminder',
    message: 'No reminders found!'
  },
  'E-10326': {
    key: 'reminder',
    type: 'reminder',
    message: 'Reminder days should not be same as previous reminder'
  },
  'E-10327': {
    key: 'reminder',
    type: 'reminder',
    message: 'Please enter reminder days'
  },
  'E-10328': {
    key: 'url',
    type: 'url',
    message: 'This URL is not allowed. Please enter a unique URL!'
  },
  'E-10329': {
    key: 'email',
    type: 'email',
    message: 'Mail unsubscription request failed!'
  },
  'E-10330': {
    key: 'email',
    type: 'email',
    message: 'The given mail id belongs to super-admin!'
  },
  'E-10331': {
    key: 'email',
    type: 'email',
    message: 'The given mail id belongs to admin!'
  },
  'E-10332': {
    key: 'field',
    type: 'field',
    message: 'Please enter the sequence number'
  },
  'E-10333': {
    key: 'feedback',
    type: 'feedback',
    message: "You can't give feedback for cancelled counselling session!"
  },
  'E-10334': {
    key: 'feedback',
    type: 'feedback',
    message: "You can't give feedback for not attended counselling session!"
  },
  'E-10335': {
    key: 'feedback',
    type: 'feedback',
    message: 'Unable to add your feedback!'
  },
  'E-10357': {
    key: 'client-field',
    type: 'client-feild',
    message: 'Please select client'
  },
  'E-10358': {
    key: 'partner-field',
    type: 'partner-field',
    message: 'Please select partner'
  },
  'E-10359': {
    key: 'partner-field',
    type: 'partner-field',
    message: 'Please Enter Terms and Conditions'
  },
  'E-10360': {
    key: 'coupon-code-field',
    type: 'coupon-code-field',
    message: 'Incorrect coupon code. Please try again'
  },
  'E-10361': {
    key: 'course-field',
    type: 'course-field',
    message: 'Course is currently used in a package. Please unlink the course and try again.'
  },
  'E-10362': {
    key: 'coupon-exist',
    type: 'coupon-exist',
    message: 'The coupon code you entered is already exist'
  },
  'E-10363': {
    key: 'booking-details',
    type: 'booking-details',
    message: 'Unable to fetch user booking details'
  },
  'E-10364': {
    key: 'excel-file',
    type: 'excel-file',
    message: 'Unable to fetch data from excel file.'
  },
  'E-10365': {
    key: 'disclaimer-field',
    type: 'disclaimer-field',
    message: 'Please enter disclaimer'
  },
  'E-10366': {
    key: 'sso-field',
    type: 'sso-field',
    message: 'Please select SSO type'
  },
  'E-10367': {
    key: 'user-bookings',
    type: 'user-bookings',
    message: 'No data is found'
  },
  'E-10368': {
    key: 'package-report',
    type: 'package-report',
    message: 'Master report package data not found'
  },
  'E-10369': {
    key: 'user-report',
    type: 'user-report',
    message: 'Master report userdata not found'
  },
  'E-10370': {
    key: 'user-auth',
    type: 'user-auth',
    message:
      'The company associated with this email does not have an active agreement for SSO-based login'
  },
  'E-10371': {
    key: 'user-auth',
    type: 'user-auth',
    message: 'This email id is registered as part of another company'
  },
  'E-10372': {
    key: 'counsellor-financial',
    type: 'counsellor-financial',
    message: 'Counsellor financial tracking data not found'
  },
  'E-10373': {
    key: 'feedback-report',
    type: 'feedback-report',
    message: 'No data found'
  },
  'E-10374': {
    key: 'cost-disclaimer',
    type: 'cost-disclaimer',
    message: 'Please enter cost disclaimer'
  },
  'E-10375': {
    key: 'upload-user-booking',
    message: 'Upload user booking not found',
    type: 'Field level'
  },
  'E-10376': {
    key: 'update-booking-data',
    message: 'Unable to update booking data, because it is already confirmed',
    type: 'Field level'
  },
  'E-10377': {
    key: 'user-belongs-to-another-company',
    message: 'User belongs to another company',
    type: 'Field level'
  },
  'E-10378': {
    key: 'maximum-limit',
    message: 'The maximum limit is 10,000',
    type: 'Field level'
  },
  'E-10379': {
    key: 'maximum-limit',
    message: 'The maximum limit is 50,000',
    type: 'Field level'
  },
  'E-10380': {
    key: 'maximum-contribution',
    message: 'Maximum contribution only 10% of basic',
    type: 'Field level'
  },
  'E-10381': {
    key: 'maximum-contribution',
    message: 'Maximum contribution only 14% of basic',
    type: 'Field level'
  },
  'E-10382': {
    key: 'update-failed',
    message: 'Update failed: Duplicate booking detected',
    type: 'Field level'
  },
  'E-10383': {
    key: 'upload-failed',
    message: 'Please upload valid Excel file',
    type: 'Field level'
  },
  'E-10384': {
    key: 'page-visit-report',
    message: 'Portal page visits data not found.',
    type: 'Field level'
  },
  'E-10385': {
    key: 'assessment-report',
    message: 'Assessment report data not found.',
    type: 'Field level'
  },
  'E-10386': {
    key: 'session-feedback',
    message: 'Please enter your feedback',
    type: 'Field level'
  },
  'E-10387': {
    key: 'assessment-report',
    message: 'Feedback must be minimum 1 word',
    type: 'Field level'
  },
  'E-10388': {
    key: 'session-feedback',
    message: 'You have already submitted a feedback for this session',
    type: 'Field level'
  },
  'E-10389': {
    key: 'default-package',
    message: 'Default package is already exists',
    type: 'default-package'
  },
  'E-10390': {
    key: 'discount-code',
    message: 'Discount code data not found',
    type: 'Field level'
  },
  'E-10391': {
    key: 'discount-code',
    message: 'Please enter discount code',
    type: 'Field level'
  },
  'E-10392': {
    key: 'discount-code',
    message: 'Please enter discount percentage',
    type: 'Field level'
  },
  'E-10393': {
    key: 'discount-code',
    message: 'Discount code already exists',
    type: 'Field level'
  },
  'E-10394': {
    key: 'discount-code',
    message: 'Discount code percentage out off limit',
    type: 'Field level'
  },
  'E-10395': {
    key: 'discount-code',
    message: 'Discount percentage not valid',
    type: 'Field level'
  },
  'E-10396': {
    key: 'discount-code',
    message: 'Invalid discount code',
    type: 'Field level'
  },
  'E-10397': {
    key: 'discount-code',
    message: 'Discount code expired',
    type: 'Field level'
  },
  'E-10398': {
    key: 'discount-code',
    message: 'Discount code already used',
    type: 'Field level'
  },
  'E-10399': {
    key: 'discount-code',
    message: 'Discount code not applicable to selected counsellor/category',
    type: 'Field level'
  },
  'E-10400': {
    key: 'ads-report',
    type: 'ads-report',
    message: 'Ads report data not found'
  },
  'E-10401': {
    key: 'discount',
    type: 'discount',
    message: 'Discount codes report data not found'
  },
  'E-10402': {
    key: 'user',
    type: 'user',
    message: 'User is inactive. Kindly activate the user from Manage users'
  },
  'E-10403': {
    key: 'address',
    type: 'address',
    message: 'Please enter the address'
  },
  'E-10404': {
    key: 'address',
    type: 'address',
    message: 'Please enter valid pin code'
  },
  'E-10405': {
    key: 'address',
    type: 'address',
    message: 'Please select a state'
  },
  'E-10406': {
    key: 'address',
    type: 'address',
    message: 'Please select a city'
  },
  'E-10407': {
    key: 'address',
    type: 'address',
    message: 'Please select a country'
  },
  'E-10408': {
    key: 'Sequence',
    type: 'Sequence',
    message: 'Video Sequence number already exists'
  },
  'E-10409': {
    key: 'public-ads',
    type: 'public-ads',
    message: 'No ads found.'
  },
  'E-10410': {
    key: 'stock-market-course',
    type: 'stock-market-course',
    message: 'Stock Market Course not found.'
  },
  'E-10411': {
    key: 'Booking-cancelled',
    type: 'error',
    message: 'Booking is already cancelled.'
  },
  'E-10412': {
    key: 'book-counselling',
    type: 'book-counselling',
    message: 'Session cannot be booked on the current date or the following date.'
  },
  'E-10413': {
    key: 'SIP-calculator',
    type: 'error',
    message: 'Unable to fetch Goal Based Top Up SIP calculator data!'
  },
  'E-10414': {
    key: 'Step-SIP-calculator',
    type: 'error',
    message: 'Unable to fetch Step Up SIP calculator data!'
  },
  'E-10415': {
    key: 'delete-widget',
    type: 'delete-widget',
    message: 'Unable to delete widget'
  },
  'E-10416': {
    key: 'delete-webinar',
    type: 'delete-webinar',
    message: 'Unable to delete webinar!'
  },
  'E-10417': {
    key: 'company',
    type: 'Field level',
    message: 'Unable to find company'
  },
  'E-10418': {
    key: 'fra',
    type: 'Field level',
    message: 'No FRA questions found!'
  },
  'E-10419': {
    key: 'fra',
    type: 'Field level',
    message: 'Unable to submit FRA answer!'
  },
  'E-10420': {
    key: 'fra',
    type: 'Field level',
    message: 'Unable to fetch FRA score!'
  },
  'E-10421': {
    key: 'clients',
    type: 'Field level',
    message: 'Please select atleast one counsellor'
  },
  'E-10422': {
    key: 'calculator',
    type: 'Field level',
    message: 'Unable to fetch ETF Corner calculator data!'
  },
  'E-10423': {
    key: 'calculator',
    type: 'Field level',
    message: 'Unable to fetch Mutual funds lumpsum Returns data!'
  },
  'E-10424': {
    key: 'calculator',
    type: 'Field level',
    message: 'Unable to fetch Compare mutual funds data!'
  },
  'E-10425': {
    key: 'calculator',
    type: 'Field level',
    message: 'Unable to fetch Schemes list by amc and category!'
  },
  'E-10426': {
    key: 'user-journey',
    type: 'Field level',
    message: "Unable to fetch user's financial journey data"
  },
  'E-10427': {
    key: 'user-journey',
    type: 'Field level',
    message: "Unable to update user journey!"
  },
  'E-10428': {
    key: 'user-journey',
    type: 'Field level',
    message: 'Unable to complete financial journey, Please complete all topics, try again'
  },
  'E-10429': {
    key: 'user-dynamic-activities',
    type: 'Field level',
    message: 'No activities found!'
  }
};
