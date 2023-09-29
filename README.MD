# DMOJ Submission Page Enhancer #

## Overview ##

The DMOJ Submission Page Enhancer is a user script that enhances the DMOJ submissions page by adding a "View Source" button for each submission. This allows users to easily access the source code of submissions.

Original purpose was to quick view technical submissions for Western AI projects team. Feel free to use for yourself :)

## Installation ##

To contribute to this project or customize the script for your own use, follow the steps below:

## 1. Clone the Repository: ##
```sh
git clone https://github.com/JackyLiu13/dmojQuickSrc
```

## 2. Add Extension: ##
* Enter into the URL: chrome://extensions 
* Press Load unpack, and select dmojQuickSrc 
* Head onto Dmoj on https://dmoj.ca/submissions/user/{username}/

    ### View Source ###      
    * Under the existing view button for questions you've completed, a new button called View Source will be available 
    * Now you should have a new button under the view button :)

    ### Console Paste ###  
    * Note it is only for ccc09s1, avatarwater, ccc15j2
        * To change questions `const problemToQuestionCode = {}`
    * In your console you should now have a JSON styled text of the submissions
    ```
    [
        {
            "problem": "CCC '09 S1 - Cool Numbers",
            "questionCode": "ccc09s1",
            "submissionCode": "0000000",
            "username": "JackyLiu13"
        },
    ]
    ```

## 3.  Contribute! ##
```sh
cd dmojQuickSrc
```
* All Scripts is just in the content.js
* When Testing be sure to head back into `chrome://extensions` to reload the script
* Have fun :\)

## Credits ##
[Jacky Liu 09/24/2023](https://github.com/JackyLiu13)




 
