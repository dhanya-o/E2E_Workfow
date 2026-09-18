import { env } from "node:process";

export const testData = {
    firstName: 'Dhanya',
    lastName: 'lastname test',
    email: `test_${Date.now()}@example.com`,
    phone: '9888888888',
    password: 'Test@123',
    occupation: '1: Doctor',
    gender: 'Female'

};

export const ProducttestData = {

    product: {
        name: 'ADIDAS ORIGINAL',
        secondProduct: 'ZARA COAT 3'
    },

    payment: {
        cardNumber: '4242424242424242',
        expiryMonth: '10',
        expiryYear: '27',
        cvv: '890',
        cardHolderName: 'DHANYA'
    },

    country: {
        valid: 'India',
        second: 'Bahrain'
    },

    order: {
        orderId: '6aa708dee7cd69710fd7d2dd'
    }
};

export const loginTestData = {
    validUser: {
        email: env.email || 'dhanya_test@example.com',
        password: 'Test@123'
    },

    invalidUser: {
        email: 'invaliduser@gmail.com',
        password: 'WrongPassword123'
    },

};


