import { APIMessages } from "@/interface/common-interface";


export const errorMessage: APIMessages = {
  'E-10001': {
    key: 'name',
    message: 'Please enter full name',
    type: 'Generic'
  },
  'E-10002': {
    key: 'mobile',
    message: 'Please enter your mobile number',
    type: 'field_value'
  },
  'E-10003': {
    key: 'education',
    message: 'Please select education',
    type: 'field_value'
  },
  'E-10004': {
    key: 'stream',
    message: 'Please select stream',
    type: 'field_value'
  },
  'E-10005': {
    key: 'city',
    message: 'Please enter city',
    type: 'field_value'
  },
  'E-10006': {
    key: 'help',
    message: 'Please describe how we can help you',
    type: 'field_value'
  },
  'E-10007': {
    key: 'data',
    message: 'unable to submit your data',
    type: 'field_value'
  },
};
