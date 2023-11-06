interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own applications',
    'Apply for jobs',
    'Edit personal information',
    'View company information',
  ],
  ownerAbilities: ['Manage applications', 'Manage jobs', 'Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1af56eb5-c96b-4ea2-b027-0081a006afcb',
};
