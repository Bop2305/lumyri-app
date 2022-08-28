import { v4 as uuidv4 } from 'uuid';

export type DataPaymentsType = Array<{
  id: string
  firstName: string
  lastName: string
  type: string
  number: string
  country: string
  expiration: string
  cvv: string
  address:  {
    countryId: string
    countryName: string
    stateId: string
    stateName: string
    streetName: string
    zipCode: string
    aptNumber: string
  }
}>

export const DataPayments: DataPaymentsType = [
  {
    id: uuidv4(),
    firstName: 'M. Wildan',
    lastName: 'Wari',
    type:"Visa",
    number:"5347498082170371",
    country: 'United States',
    expiration:"09/22",
    cvv: "401",
    address: {
      countryId: uuidv4(),
      stateId: uuidv4(),
      countryName: 'United States',
      stateName: 'Indiana',
      streetName: '7250 North Depot Street',
      zipCode: '435789',
      aptNumber: '137A'
    },
  },
  {
    id: uuidv4(),
    firstName: 'M. Wildan',
    lastName: 'Wari',
    type:"Visa",
    number:"5347498082170371",
    country: 'United States',
    expiration:"09/22",
    cvv: "401",
    address: {
      countryId: uuidv4(),
      stateId: uuidv4(),
      countryName: 'United States',
      stateName: 'Indiana',
      streetName: '7250 North Depot Street',
      zipCode: '435789',
      aptNumber: '137A'
    },
  },
  {
    id: uuidv4(),
    firstName: 'M. Wildan',
    lastName: 'Wari',
    type:"Visa",
    number:"5347498082170371",
    country: 'United States',
    expiration:"09/22",
    cvv: "401",
    address: {
      countryId: uuidv4(),
      stateId: uuidv4(),
      countryName: 'United States',
      stateName: 'Indiana',
      streetName: '7250 North Depot Street',
      zipCode: '435789',
      aptNumber: '137A'
    },
  }
]