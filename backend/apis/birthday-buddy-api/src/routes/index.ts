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
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image: 'https://www.course-api.com/images/people/person-1.jpeg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image: 'https://www.course-api.com/images/people/person-2.jpeg',
    },
    {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image: 'https://www.course-api.com/images/people/person-3.jpeg',
    },
    {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image: 'https://www.course-api.com/images/people/person-4.jpeg',
    },
    {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image: 'https://www.course-api.com/images/people/person-5.jpeg',
    },
];

/* GET */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send(JSON.stringify(data));
});

export default router;
