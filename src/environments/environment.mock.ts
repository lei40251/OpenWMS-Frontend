const baseURL: string = "http://localhost:3000/";

export const environment = {
  production: true,
  envName: "mock",
  apiURL: {
    categories: baseURL + "category/getCategories",
    customers: baseURL + "customer/getCustomers",
    inboundDetails: baseURL + "inbound/getInboundDetails",
    inboundRecords: baseURL + "inbound/getInboundRecords",
    inventories: baseURL + "inventory/getInventories",
    inboundReceipt: baseURL + "inbound/getInboundReceipt",
    outReceipt: baseURL + "outbound/getOutboundReceipt",
    outboundDetail: baseURL + "outbound/getOutboundDetail",
    outboundRecords: baseURL + "outbound/getOutboundRecords",
    staffs: baseURL + "staff/getStaffs",
    vendors: baseURL + "vendor/getVendors",
    warehouses: baseURL + "warehouse/getWarehouses"
  }
};
