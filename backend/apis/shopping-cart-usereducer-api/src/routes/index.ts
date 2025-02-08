import express, { Router, Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/**
 * DATA_TABLE
 * | id | name          | age | image                                                  |
 * |----|---------------|-----|--------------------------------------------------------|
 * | 1  | Bertie Yates  | 29  | https://www.course-api.com/images/people/person-1.jpeg |
 * | 2  | Hester Hogan  | 32  | https://www.course-api.com/images/people/person-2.jpeg |
 * | 3  | Larry Little  | 36  | https://www.course-api.com/images/people/person-3.jpeg |
 * | 4  | Sean Walsh    | 34  | https://www.course-api.com/images/people/person-4.jpeg |
 * | 5  | Lola Gardner  | 29  | https://www.course-api.com/images/people/person-5.jpeg |
 */

const data = [
    {
        id: 'rec1JZlfCIBOPdcT2',
        title: 'Samsung Galaxy S8',
        price: '399.99',
        img: 'https://www.course-api.com/images/cart/phone-1.png',
        amount: 1,
    },
    {
        id: 'recB6qcHPxb62YJ75',
        title: 'google pixel',
        price: '499.99',
        img: 'https://www.course-api.com/images/cart/phone-2.png',
        amount: 1,
    },
    {
        id: 'recdRxBsE14Rr2VuJ',
        title: 'Xiaomi Redmi Note 2',
        price: '699.99',
        img: 'https://www.course-api.com/images/cart/phone-3.png',
        amount: 1,
    },
    {
        id: 'recwTo160XST3PIoW',
        title: 'Samsung Galaxy S7',
        price: '599.99 ',
        img: 'https://www.course-api.com/images/cart/phone-4.png',
        amount: 1,
    },
];

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send(JSON.stringify(data));
});

export default router;
