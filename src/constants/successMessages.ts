import { APIMessages } from "@/interface/common-interface";


export const successMessage: APIMessages = {
  'S-10001': {
    key: 'send-otp',
    message: 'OTP sent to your email ID',
    type: 'submission-info'
  },
  'S-10002': {
    key: 'verify_otp',
    message: 'OTP verified successfully',
    type: 'submission-info'
  },
  'S-10003': {
    key: 'send_otp',
    message: 'OTP sent to your email again',
    type: 'submission-info'
  },
  'S-10004': {
    key: 'login',
    message: 'User logged in successfully',
    type: 'submission-info'
  },
  'S-10005': {
    key: 'user-login',
    message: 'Login successful',
    type: 'submission-info'
  },
  'S-10006': {
    key: 'find-client',
    message: 'Client list found',
    type: 'submission-info'
  },
  'S-10007': {
    key: 'create-client',
    message: 'Client added successfully',
    type: 'submission-info'
  },
  'S-10008': {
    key: 'update-client',
    message: 'Client details successfully updated',
    type: 'submission-info'
  },
  'S-10009': {
    key: 'get_details',
    message: 'Client details fetched successfully',
    type: 'submission-info'
  },
  'S-10010': {
    key: 'create-widget',
    message: 'Widget created successfully',
    type: 'submission-info'
  },
  'S-10011': {
    key: 'fetch_widget_list',
    message: 'Widget list fetched successfully',
    type: 'submission-info'
  },
  'S-10012': {
    key: 'update-widget',
    message: 'Widget updated successfully',
    type: 'submission-info'
  },
  'S-10013': {
    key: 'find-filter',
    message: 'Filter list fetched successfully',
    type: 'submission-info'
  },
  'S-10014': {
    key: 'find-modules',
    message: 'Modules list fetched successfully',
    type: 'submission-info'
  },
  'S-10015': {
    key: 'create-landingpage',
    message: 'Landing page created successfully',
    type: 'submission-info'
  },
  'S-10016': {
    key: 'fetch-homepage',
    message: '	Home page fetched successfully',
    type: 'submission-info'
  },
  'S-10017': {
    key: 'fetch-answer',
    message: 'Chat answer fetched successfully',
    type: 'submission-info'
  },
  'S-10018': {
    key: 'fetch-answer-suggestion',
    message: 'Answer and suggestion fetch successfully',
    type: 'submission-info'
  },
  'S-10019': {
    key: 'company-verified',
    message: 'The company URL is verified successfully',
    type: 'submission-info'
  },
  'S-10020': {
    key: 'company-verified',
    message: 'Counsellors list fetched successfully',
    type: 'submission-info'
  },
  'S-10021': {
    key: 'fetch_widget_list',
    message: 'Booking created successfully',
    type: 'submission-info'
  },
  'S-10022': {
    key: 'company-verified',
    message: 'Booking list fetched successfully',
    type: 'submission-info'
  },
  'S-10023': {
    key: 'company-verified',
    message: 'Booking updated successfully',
    type: 'submission-info'
  },
  'S-10024': {
    key: 'user-signup',
    message: 'New account created successfully',
    type: 'submission-info'
  },
  'S-10025': {
    key: 'user-profile',
    message: 'Profile data update successfully',
    type: 'submission-info'
  },
  'S-10026': {
    key: 'email-support',
    message: 'Email support request submit successfully',
    type: 'submission-info'
  },
  'S-10027': {
    key: 'counselor-data',
    message: 'Counselor slots fetch successfully',
    type: 'counselor-data-fetch'
  },
  'S-10028': {
    key: 'email-link',
    message: 'Email linked to session code successfully',
    type: 'email-link-update'
  },
  'S-10029': {
    key: 'find-courses',
    message: 'Courses list fetched successfully',
    type: 'courses-data-fetch'
  },
  'S-10030': {
    key: 'find-courses',
    message: 'Courses details fetched successfully',
    type: 'courses-data-fetch'
  },
  'S-10031': {
    key: 'course-enroll',
    message: 'The course enrolled successfully',
    type: 'courses-data-fetch'
  },
  'S-10032': {
    key: 'course-activity',
    message: 'Course activities is updated successfully',
    type: 'courses-data-fetch'
  },
  'S-10033': {
    key: 'find-videos',
    message: 'Videos list fetched successfully',
    type: 'videos-data-fetch'
  },
  'S-10034': {
    key: 'course-create',
    message: 'New course created successfully',
    type: 'courses-data'
  },
  'S-10035': {
    key: 'user-count',
    message: 'User count retrieved successfully',
    type: 'user-count-data'
  },
  'S-10036': {
    key: 'user-count',
    message: 'User count updated successfully',
    type: 'user-count-data'
  },
  'S-10037': {
    key: 'notification',
    message: 'Notification retrieved successfully',
    type: 'notification'
  },
  'S-10038': {
    key: 'category',
    message: 'Category details fetched successfully',
    type: 'category'
  },
  'S-10039': {
    key: 'FAQ-question',
    message: 'Your question has been submitted successfully',
    type: 'FAQ'
  },
  'S-10040': {
    key: 'user-activity',
    message: 'User activity added successfully',
    type: 'user-activity'
  },
  'S-10041': {
    key: 'webinar',
    message: 'Webinar sessions fetched successfully',
    type: 'webinar'
  },
  'S-10042': {
    key: 'webinar-register',
    message: 'Webinar session registered successfully, Check your email for confirmation',
    type: 'webinar'
  },
  'S-10043': {
    key: 'webinar-unregister',
    message: 'Webinar session un-registered successfully, Check your email for confirmation',
    type: 'webinar'
  },
  'S-10044': {
    key: 'video-playlist',
    message: 'Fetched video playlist details successfully',
    type: 'video'
  },
  'S-10045': {
    key: 'preferences',
    message: 'Your preferences saved successfully',
    type: 'preference'
  },
  'S-10046': {
    key: 'preferences',
    message: 'Your preferences updated successfully',
    type: 'preference'
  },
  'S-10047': {
    key: 'landing-page',
    message: 'Landing page fetched successfully',
    type: 'landing-page'
  },
  'S-10048': {
    key: 'category',
    message: 'Category added successfully',
    type: 'category'
  },
  'S-10049': {
    key: 'streak-message',
    message: 'Streak Messages fetched successfully',
    type: 'streak'
  },
  'S-10050': {
    key: 'sub-category',
    message: 'Sub category added successfully',
    type: 'category'
  },
  'S-10051': {
    key: 'category',
    message: 'Categories updated successfully',
    type: 'category'
  },
  'S-10052': {
    key: 'sub-category',
    message: 'Sub category updated successfully',
    type: 'category'
  },
  'S-10053': {
    key: 'congrats',
    message: "Congratulations! that's the correct",
    type: 'congrats'
  },
  'S-10054': {
    key: 'webinar',
    message: 'Webinar added successfully',
    type: 'webinar'
  },
  'S-10055': {
    key: 'webinar',
    message: 'Webinar updated successfully',
    type: 'webinar'
  },
  'S-10056': {
    key: 'speakers',
    message: 'Speakers list fetched successfully',
    type: 'speakers'
  },
  'S-10057': {
    key: 'landing-page',
    message: 'Landing page details fetched successfully',
    type: 'landing-page'
  },
  'S-10058': {
    key: 'counselling',
    message: 'Default counselling charge updated successfully',
    type: 'counselling'
  },
  'S-10059': {
    key: 'counselling',
    message: 'Default counselling charge fetched successfully',
    type: 'counselling'
  },
  'S-10060': {
    key: 'Group',
    message: 'Group added successfully',
    type: 'Group'
  },
  'S-10061': {
    key: 'Group',
    message: 'Group updated successfully',
    type: 'Group'
  },
  'S-10062': {
    key: 'FAQ',
    message: 'FAQ added successfully',
    type: 'FAQ'
  },
  'S-10063': {
    key: 'FAQ',
    message: 'FAQ updated successfully',
    type: 'FAQ'
  },
  'S-10064': {
    key: 'Notification',
    message: 'Notification added successfully',
    type: 'Notification'
  },
  'S-10065': {
    key: 'Notification',
    message: 'Notification fetched successfully',
    type: 'Notification'
  },
  'S-10066': {
    key: 'Booking',
    message: 'Booking Amount fetch successfully',
    type: 'Booking Amount fetch successfully'
  },
  'S-10067': {
    key: 'Payment',
    message: 'Payment requested added successfully',
    type: 'Payment'
  },
  'S-10068': {
    key: 'Notification',
    message: 'Notification updated successfully',
    type: 'Notification'
  },
  'S-10069': {
    key: 'Notification',
    message: 'Notification deleted successfully',
    type: 'Notification'
  },
  'S-10070': {
    key: 'Booking Payment',
    message: 'Payment initiated successfully',
    type: 'Notification'
  },

  'S-10071': {
    key: 'Calculator Scheme Categories',
    message: 'Calculator all scheme categories fetched successfully',
    type: 'Notification'
  },
  'S-10072': {
    key: 'Calculator Scheme Broad Categories',
    message: 'Calculator scheme broad categories fetched successfully',
    type: 'Notification'
  },
  'S-10073': {
    key: 'Calculator Mutual Fund Company List',
    message: 'Calculator mutual fund company list fetched successfully',
    type: 'Notification'
  },
  'S-10074': {
    key: 'Calculator Mutual Fund Scheme List',
    message: 'Calculator mutual fund scheme list fetched successfully',
    type: 'Notification'
  },
  'S-10075': {
    key: 'Rolling Returns vs Category',
    message: 'Rolling returns vs category calculator data fetched successfully',
    type: 'Notification'
  },
  'S-10076': {
    key: 'Admins List',
    message: 'Admins list fetched successfully',
    type: 'Notification'
  },
  'S-10077': {
    key: 'Admin Addition',
    message: 'Admin added successfully',
    type: 'Notification'
  },
  'S-10078': {
    key: 'Admin Update',
    message: 'Admin updated successfully',
    type: 'Notification'
  },
  'S-10079': {
    key: 'Rolling Returns vs Benchmark',
    message: 'Rolling returns vs benchmark calculator data fetched successfully',
    type: 'Notification'
  },
  'S-10080': {
    key: 'Mutual Fund Portfolio Overlap',
    message: 'Mutual Fund Portfolio Overlap calculator data fetched successfully',
    type: 'Notification'
  },
  'S-10081': {
    key: 'Mutual Fund SWP',
    message: 'Mutual Fund SWP calculator data fetched successfully',
    type: 'Notification'
  },
  'S-10082': {
    key: 'User Update',
    message: 'User updated successfully',
    type: 'Notification'
  },
  'S-10083': {
    key: 'Users Fetch',
    message: 'Users fetched successfully',
    type: 'Notification'
  },
  'S-10084': {
    key: 'E-Learning Videos',
    message: 'E-Learning videos fetched successfully',
    type: 'Notification'
  },
  'S-10085': {
    key: 'E-Learning Video Addition',
    message: 'E-Learning video added successfully',
    type: 'Notification'
  },
  'S-10086': {
    key: 'E-Learning Video Update',
    message: 'E-Learning video details updated successfully',
    type: 'Notification'
  },
  'S-10087': {
    key: 'calculator',
    message: 'Calculator common stocks across MF Schemes list fetched successfully ',
    type: 'Calculator'
  },
  'S-10088': {
    key: 'course',
    message: 'Course updated successfully',
    type: 'course'
  },
  'S-10089': {
    key: 'course',
    message: 'Section added successfully',
    type: 'course'
  },
  'S-10090': {
    key: 'course',
    message: 'Section updated successfully',
    type: 'course'
  },
  'S-10091': {
    key: 'course',
    message: 'Chapter added successfully',
    type: 'course'
  },
  'S-10092': {
    key: 'course',
    message: 'Chapter updated successfully',
    type: 'course'
  },
  'S-10093': {
    key: 'course',
    message: 'Sections fetched successfully',
    type: 'course'
  },
  'S-10094': {
    key: 'course',
    message: 'Enrollments fetched successfully',
    type: 'course'
  },
  'S-10095': {
    key: 'assessment',
    message: 'Assessment added successfully',
    type: 'assessment'
  },
  'S-10096': {
    key: 'assessment',
    message: 'Assessment fetched successfully',
    type: 'assessment'
  },
  'S-10097': {
    key: 'assessment',
    message: 'Assessment updated successfully',
    type: 'assessment'
  },
  'S-10098': {
    key: 'assessment',
    message: 'Assessment deleted successfully',
    type: 'assessment'
  },
  'S-10099': {
    key: 'session',
    message: 'Session code verified successfully',
    type: 'session'
  },
  'S-10100': {
    key: 'course',
    message: 'Chapter fetched successfully',
    type: 'course'
  },
  'S-10101': {
    key: 'counsellor',
    message: 'Counsellor added successfully',
    type: 'counsellor'
  },
  'S-10102': {
    key: 'counsellor',
    message: 'Counsellor fetched successfully',
    type: 'counsellor'
  },
  'S-10103': {
    key: 'counsellor',
    message: 'Counsellor updated successfully',
    type: 'counsellor'
  },
  'S-10104': {
    key: 'counsellor',
    message: 'Counsellor deleted successfully',
    type: 'counsellor'
  },
  'S-10105': {
    key: 'counsellor',
    message: 'Booking details fetched successfully',
    type: 'booking'
  },
  'S-10106': {
    key: 'master-list',
    message: 'Master list fetched successfully',
    type: 'master-list'
  },
  'S-10107': {
    key: 'course-report',
    message: 'Course report fetched succesfully',
    type: 'course-report'
  },
  'S-10108': {
    key: 'Nps calculator',
    message: 'Nps calculator data fetched successfully',
    type: 'Nps calculator'
  },
  'S-10109': {
    key: 'coupon-code',
    message: 'Coupon code verified successfully',
    type: 'coupon-code'
  },
  'S-10110': {
    key: 'package',
    message: 'Package added successfully',
    type: 'package'
  },
  'S-10111': {
    key: 'package',
    message: 'Package update successfully',
    type: 'package'
  },
  'S-10112': {
    key: 'coupon-code',
    message: 'Coupon codes generated successfully',
    type: 'coupon-code'
  },
  'S-10113': {
    key: 'coupon-code',
    message: 'Coupon code list fetched successfully',
    type: 'coupon-code'
  },
  'S-10114': {
    key: 'package',
    message: 'Packages fetched successfully',
    type: 'package'
  },
  'S-10115': {
    key: 'package',
    message: 'Package deleted successfully',
    type: 'package'
  },
  'S-10116': {
    key: 'knowledge-base',
    message: 'Categories fetched successfully',
    type: 'knowledge-base'
  },
  'S-10117': {
    key: 'package',
    message: 'Package Subscribed successfully',
    type: 'package'
  },
  'S-10118': {
    key: 'package',
    message: 'Package payment paid successfully',
    type: 'package'
  },
  'S-10119': {
    key: 'package',
    message: 'Package validated successfully',
    type: 'package'
  },
  'S-10120': {
    key: 'notification',
    message: 'Notifications marked as read',
    type: 'notification'
  },
  'S-10121': {
    key: 'course',
    message: 'Time spent on course successfully captured',
    type: 'course'
  },
  'S-10122': {
    key: 'tasks',
    message: 'All tasks fetched successfully',
    type: 'tasks'
  },
  'S-10123': {
    key: 'tasks',
    message: 'My tasks fetched successfully',
    type: 'tasks'
  },
  'S-10124': {
    key: 'tasks',
    message: 'Tasks added successfully',
    type: 'tasks'
  },
  'S-10125': {
    key: 'tasks',
    message: 'Task updated successfully',
    type: 'tasks'
  },
  'S-10126': {
    key: 'image',
    message: 'Image uploaded successfully',
    type: 'image'
  },
  'S-10127': {
    key: 'image',
    message: 'Image deleted successfully',
    type: 'image'
  },
  'S-10128': {
    key: 'time-spend',
    message: 'User time spent added successfully',
    type: 'time-spend'
  },
  'S-10129': {
    key: 'dashboard',
    message: 'Admin dashboard data fetched successfully',
    type: 'dashboard'
  },
  'S-10130': {
    key: 'report',
    message: 'Company wise report fetched successfully',
    type: 'report'
  },
  'S-10131': {
    key: 'report',
    message: 'View Engagement report fetched successfully',
    type: 'report'
  },
  'S-10132': {
    key: 'CTA',
    message: "CTA's for calculator fetched successfully",
    type: 'CTA'
  },
  'S-10133': {
    key: 'report',
    message: 'Portal usage analytics report fetched successfully',
    type: 'report'
  },
  'S-10134': {
    key: 'report',
    message: 'Course time-based report data fetched successfully ',
    type: 'report'
  },
  'S-10135': {
    key: 'cta',
    message: 'CTA added successfully',
    type: 'cta'
  },
  'S-10136': {
    key: 'cta',
    message: 'CTA list fetched successfully',
    type: 'cta'
  },
  'S-10137': {
    key: 'cta',
    message: 'CTA updated successfully',
    type: 'cta'
  },
  'S-10138': {
    key: 'cta',
    message: 'CTA deleted successfully',
    type: 'cta'
  },
  'S-10139': {
    key: 'reminders',
    message: 'Reminders list fetched successfully',
    type: 'reminders'
  },
  'S-10140': {
    key: 'reminders',
    message: 'Reminder added successfully',
    type: 'reminders'
  },
  'S-10141': {
    key: 'reminders',
    message: 'Reminder updated successfully',
    type: 'reminders'
  },
  'S-10142': {
    key: 'email',
    message: 'You have been successfully unsubscribed!',
    type: 'email'
  },
  'S-10143': {
    key: 'feedback',
    message: 'Your feedback added successfully',
    type: 'feedback'
  },
  'S-10144': {
    key: 'financial-planning',
    message: 'Your financial planning journey has begun!',
    type: 'financial-planning'
  },
  'S-10145': {
    key: 'personal-details',
    message: 'Personal Details saved successfully',
    type: 'financial-planning'
  },
  'S-10146': {
    key: 'financial-planner',
    message: 'Financial planner fetched successfully.',
    type: 'financial-planning'
  },
  'S-10147': {
    key: 'tips',
    message: 'Tips fetched successfully.',
    type: 'financial-planning'
  },
  'S-10148': {
    key: 'income-details',
    message: 'Income Details saved successfully',
    type: 'financial-planning'
  },
  'S-10149': {
    key: 'expenses-details',
    message: 'Expenses Details saved successfully',
    type: 'financial-planning'
  },
  'S-10150': {
    key: 'token-verify',
    message: 'Token verify successfully',
    type: 'auth'
  },
  'S-10151': {
    key: 'master-report',
    message: 'Master report user data fetched successfully',
    type: 'report'
  },
  'S-10152': {
    key: 'master-report',
    message: 'Master report package data fetched successfully',
    type: 'report'
  },
  'S-10153': {
    key: 'user-booking',
    message: 'User booking fetched successfully',
    type: 'booking'
  },
  'S-10154': {
    key: 'upload-booking',
    message: 'Upload User booking fetched successfully',
    type: 'booking'
  },
  'S-10155': {
    key: 'counsellor-feedback',
    message: 'Counsellor customer feedback fetched successfully',
    type: 'feedback'
  },
  'S-10156': {
    key: 'counsellor-customer-feedback-data',
    message: 'Counsellor customer feedback data fetched successfully',
    type: 'Success'
  },
  'S-10157': {
    key: 'upload-booking-data',
    message: 'Upload booking data updated successfully',
    type: 'Success'
  },
  'S-10158': {
    key: 'add-upload-booking-data',
    message: 'Upload booking data added successfully',
    type: ''
  },
  'S-10159': {
    key: 'portal-visits',
    message: 'Portal page visits data fetched successfully',
    type: 'Success'
  },
  'S-10160': {
    key: 'assessment-report',
    message: 'Assessment report data fetched successfully',
    type: 'Success'
  },
  'S-10161': {
    key: 'knowledge-base',
    message: 'Knowledge base category deleted successfully',
    type: 'knowledge-base'
  },
  'S-10162': {
    key: 'playlist-video',
    message: 'Playlist video deleted successfully',
    type: 'Success'
  },
  'S-10163': {
    key: 'discount-code',
    message: 'Discount code data fetched successfully',
    type: 'Success'
  },
  'S-10164': {
    key: 'discount-code',
    message: 'Discount code added successfully',
    type: 'Success'
  },
  'S-10165': {
    key: 'discount-code',
    message: 'Discount code updated successfully',
    type: 'Success'
  },
  'S-10166': {
    key: 'discount-code',
    message: 'Discount code deleted successfully',
    type: 'Success'
  },
  'S-10167': {
    key: 'discount-code',
    message: 'Discount code applied successfully',
    type: 'Success'
  },
  'S-10168': {
    key: 'user-profile-data',
    message: 'User profile data fetch successfully',
    type: 'Success'
  },
  'S-10169': {
    key: 'ama-question',
    message: 'AMA questions fetch successfully',
    type: 'Success'
  },
  'S-10170': {
    key: 'ads report',
    message: 'Ads report data fetched successfully',
    type: 'Success'
  },
  'S-10171': {
    key: 'discount code report',
    message: 'Discount codes report data fetched successfully',
    type: 'Success'
  },
  'S-10172': {
    key: 'public-ads',
    message: 'Public ads fetched successfully.',
    type: 'Success'
  },
  'S-10173': {
    key: 'stock-market-course',
    message: 'Stock Market Course list fetched successfully.',
    type: 'Success'
  },
  'S-10174': {
    key: 'stock-market-course-cancel',
    message: 'Course booking cancelled successfully.',
    type: 'Success'
  },
  'S-10175': {
    key: 'SIP calculator',
    message: 'Goal Based Top Up SIP calculator data fetched successfully',
    type: 'Success'
  },
  'S-10176': {
    key: 'Step Up SIP calculator',
    message: 'Step Up SIP calculator data fetched successfully.',
    type: 'Success'
  },
  'S-10177': {
    key: 'delete-widget',
    message: 'The widget has been successfully deleted',
    type: 'Success'
  },
  'S-10178': {
    key: 'delete-webinar',
    message: 'The webinar has been successfully deleted',
    type: 'Success'
  },
  'S-10179': {
    key: 'delete-client',
    message: 'The client has been successfully deleted',
    type: 'Success'
  },
  'S-10180': {
    key: 'fra',
    message: 'FRA questions fetched successfully',
    type: 'Success'
  },
  'S-10181': {
    key: 'fra',
    message: 'FRA answer submitted successfully',
    type: 'Success'
  },
  'S-10182': {
    key: 'fra',
    message: 'FRA score fetched successfully',
    type: 'Success'
  },
  'S-10183': {
    key: 'calculator',
    message: 'ETF Corner calculator data fetched successfully',
    type: 'Success'
  },
  'S-10184': {
    key: 'calculator',
    message: 'Mutual funds lumpsum Returns data fetched successfully',
    type: 'Success'
  },
  'S-10185': {
    key: 'calculator',
    message: 'Compare mutual funds data fetched successfully',
    type: 'Success'
  },
  'S-10186': {
    key: 'calculator',
    message: 'Schemes list by amc and category fetched successfully',
    type: 'Success'
  },
  'S-10187': {
    key: 'user-journey',
    message: "User's financial journey data fetched successfully",
    type: "success"
  },
  'S-10188': {
    key: 'user-journey',
    message: "User journey updated successfully",
    type: 'success'
  },
  'S-10189': {
    key: 'user-journey',
    message: "Congratulations! You've successfully completed your financial journey!",
    type: 'success'
  },
  'S-10190': {
    key: 'user-dynamic-activities',
    message: "User's dynamic activities fetched successfully",
    type: 'success'
  }
};
