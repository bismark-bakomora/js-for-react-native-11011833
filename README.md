# js-for-react-native-11011833
# Array Manipulation and User Profiles

## Student ID: 11011833

## Task Descriptions

### Task 1
**File:** `arrayManipulation.js`

**Function:** `processArray`

**Description:** 
This function takes an array of numbers as an argument and returns a new array. In the new array, each even number is squared and each odd number is tripled.

### Task 2
**File:** `arrayManipulation.js`

**Function:** `formatArrayStrings`

**Description:**
This function takes two arrays as arguments: an array of strings and an array of numbers processed by the `processArray` function. It returns a new array of strings where each string is modified based on its corresponding number from the processed numbers array. The string is capitalized if the corresponding number is even, and converted to lowercase if the number is odd.

### Task 3
**File:** `userInfo.js`

**Function:** `createUserProfiles`

**Description:**
This function takes an array of original names and an array of modified names (as returned from Task 2). It returns an array of objects where each object contains the original name, modified name, and an auto-incremented ID starting from 1.

## Usage

1. **Process an array of numbers:**
    ```javascript
    const { processArray } = require('./arrayManipulation');
    const processedNumbers = processArray([1, 2, 3, 4, 5]);
    console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
    ```

2. **Format an array of strings based on processed numbers:**
    ```javascript
    const { formatArrayStrings } = require('./arrayManipulation');
    const formattedStrings = formatArrayStrings(['Hello', 'World', 'JavaScript', 'is', 'fun'], processedNumbers);
    console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript', 'IS', 'fun']
    ```

3. **Create user profiles:**
    ```javascript
    const { createUserProfiles } = require('./userInfo');
    const userProfiles = createUserProfiles(['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'], formattedStrings);
    console.log(userProfiles);
    // Output:
    // [
    //     { originalName: 'Alice', modifiedName: 'hello', id: 1 },
    //     { originalName: 'Bob', modifiedName: 'WORLD', id: 2 },
    //     { originalName: 'Charlie', modifiedName: 'javascript', id: 3 },
    //     { originalName: 'Dave', modifiedName: 'IS', id: 4 },
    //     { originalName: 'Eve', modifiedName: 'fun', id: 5 }
    // ]
    ```

