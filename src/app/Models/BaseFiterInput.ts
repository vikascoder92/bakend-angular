// import { Filter } from "../framework/Utils/FilterUtil";


// export class BaseFilterInput {

//   type: number;
//   filterAtt: FilterAttributes[];
//   result: string;

//   filterTab: FilterTabEnum;
//   filter: Filter;

//   static getInstance(type: number, result, filterTab) {
//     const basefilter = new BaseFilterInput();
//     basefilter.type = type;
//     basefilter.result = result;
//     basefilter.filterTab = filterTab;
//     return basefilter;
//   }


// }

// export class FilterArrayPopupInput {
//   filterTab: FilterTabEnum;
//   filters: Array<FilterDataInput>;
//   result: string;

//   static getInstance(filters: Array<Filter>): FilterArrayPopupInput {
//     const input = new FilterArrayPopupInput();
//     input.filters = new Array<FilterDataInput>();
//     filters.forEach(f => {
//       const fdi = new FilterDataInput();
//       fdi.filter = f;
//       fdi.filterInput = BaseFilterInput.getInstance(f.filter_type, '', FilterTabEnum.GENERAL);
//       input.filters.push(fdi);
//       fdi.filterInput.filter = f;
//     });
//     input.filterTab = FilterTabEnum.GENERAL;
//     return input;
//   }

//   static getInstanceForAssigned(filters: Array<Filter>): FilterArrayPopupInput {
//     const input = new FilterArrayPopupInput();
//     input.filters = new Array<FilterDataInput>();
//     filters.forEach(f => {
//       const fdi = new FilterDataInput();
//       fdi.filter = f;
//       fdi.filterInput = BaseFilterInput.getInstance(f.filter_type, '', FilterTabEnum.ASSIGNED);
//       fdi.filterInput.filter = f;
//       input.filters.push(fdi);
//     });
//     input.filterTab = FilterTabEnum.ASSIGNED;
//     return input;
//   }

// }

// export class FilterDataInput {
//   filter: Filter;
//   filterInput: BaseFilterInput;
// }


// export class FilterAttributes {
//   key: string;
//   value: string;
//   operator: string;

//   getSearchQuery() {
//     return this.key + this.operator + this.value + ",";
//   }
//   getQueryAssigned() {
//     return this.key + this.operator + this.value + "&";
//   }
// }


export enum FilterType {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J
}



// export enum FilterKeys {
//   DATE = "date",
//   BILL_DATE = "billDate",
//   VOUCHER_DATE = "voucherDate",
//   COMPANY = "companyId",
//   VENDOR = "vendorId",
//   SALESMAN = "salesmanId",
//   CREATED = "created",
//   CREATED_RANGE = "created",
//   CATEGORY = "categoryId",
//   TYPE = "type",
//   SERIAL_NUM = "serialNum",
//   BATCH_NUM = "batchNum",
//   MAC_ADD = "macAddr",
//   MAC_ADDRESS = "macAddress",
//   SERIAL_NUMBER = "serialNo",
//   BATCH_NUMMBER = "batchNo",
//   CHALLAN_NUMBER = "challanNo",
//   CUSTOMER_NAME = "customer_name",
//   MOBILE_NUMBER = "mobile",
//   TASK_STATUS = "status",
//   USER_NAME = "customer_user_name",
//   EMPLOYEE_NAME = "created_by_employee",
//   ADDRESS = "address",
//   SERVICE_AREA = "service_area",
//   PAYMENT_REMARK = "payment_remark",
//   PAYMENT_TYPE = "payment_type",
//   BANK_FILTER = "bank_filter",
//   CHEQUE_NO = "checkNo",
//   CHEQUE_DATE = "chequeDate",
//   BANK_NAME = "bankName",
//   BRANCH = "branch",
//   CITY = "city",
//   PAYMENT_MODE = "paymentMode",
  
// }


// export enum FilterOperator {
//   Equal = ':',
//   GreaterThan = '>',
//   LessThan = '<',
//   LessThanEqualTo = '<=',
//   GreaterThanEqualTo = '>=',
//   EqualSymbol = '=',
//   Like = '=like='
// }


// export enum SelectFilterEnum {
//   COMPANY = 1,
//   VENDOR
// }

// export enum FilterTabEnum {
//   GENERAL = 1,
//   ASSIGNED,
// }
