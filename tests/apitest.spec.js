import { test, expect } from '@playwright/test';

test('GET API test', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(response.status());
    await expect(response).toBeOK();
    const responseBody = await response.json();
    console.log(responseBody);
});


import { test, expect } from '@playwright/test';
test('Get test API', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.data.first_name);
    expect(body.data.first_name).toBe('Janet')
});


import { test, expect } from '@playwright/test';
test('POST API test', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'Chaitali',
            job: "QA Engineer"

        }
    });
    console.log(response.status());
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body.name);
    expect(body.name).toBe('Chaitali');
    console.log(body.job);
    expect(body.job).toBe('QA Engineer')
});


import { test, expect } from '@playwright/test';
test('PUT API test', async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'Chaitali',
            job: 'Senior QA Engineer'
        }
    });
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.name);
    expect(body.name).toBe('Chaitali');
    console.log(body.job);
    expect(body.job).toBe('Senior QA Engineer');
});


import { test, expect } from '@playwright/test';
test('DELETE API test', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    console.log(response.status());
    expect(response.status()).toBe(204);
});


//Response Header

import { test, expect } from '@playwright/test';
test('response header test', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    const contentType = response.headers()['content-type'];
    console.log(contentType);
    expect(contentType).toContain('application/json');
});

// | Code                 | Purpose              |
// | -------------------- | -------------------- |
// | `console.log()`      | Print something      |
// | `response.status()`  | Get HTTP status      |
// | `response.json()`    | Get response body    |
// | `response.headers()` | Get response headers |
// | `expect()`           | Validate/verify      |

//API Authentication --- Token

import { test, expect } from '@playwright/test';
test('authetication test', async ({request}) => {
    const token = 'my-test-token';
    const response = await request.get('https://reqres.in/api/users/2', {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response.status());
});

//Query Parameters

import { test, expect } from '@playwright/test';
test('Query params test', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users', {
        params: {
            page: 2
        }
    });
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.page);
    expect(body.page).toBe(2);
});

//Path Parameters

import { test, expect } from '@playwright/test';
test('path params test', async ({request}) => {
    const userId = 2;
    const response = await request.get(`https://reqres.in/api/users/${userId}`);
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.data.first_name);
    expect(body.data.first_name).toBe('Janet');
});

// Negative API testing

import { test, expect } from '@playwright/test';
test('path params test', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/9999');
    console.log(response.status());
    expect(response.status()).toBe(404);
    const body = await response.json();
    console.log(body);
});

import { test, expect } from '@playwright/test';
test('login API - missing password', async ({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            email: 'test@example.com'
        }
    });
    console.log(response.status());
    expect(response.status()).toBe(400);
    const body = await response.json();
    console.log(body.error);
    expect(body.error).toBe('Missing password');
});

// API + UI 

import { test, expect } from '@playwright/test';
test('API and UI test', async ({request, page}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(response.status());
    expect(response.status()).toBe(200);
    const body = await response.json();
    const firstName = body.data.first_name;
    console.log(firstName);
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.locator('#username')).toBeVisible();
});

// GET = retrieve
// POST = create
// PUT = update
// DELETE = remove

//Create dynamic data

import { test, expect } from '@playwright/test';
const randomNumber = Math.floor(Math.random()*1000);
const name = `Chaitali${randomNumber}`
test('Dynamic data test', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name,
            job: 'QA Engineer'
        }
    });
    console.log(response.status());
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body.data.name);
    expect(body.name).toBe(name);
});