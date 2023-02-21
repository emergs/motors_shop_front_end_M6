import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-brand-1: #4529e6;
    --color-brand-2: #5126EA;
    --color-brand-3: #b0a6f0;
    --color-brand-4: #edeafd;

    /* grey scale */
    --grey-0:  #0B0D0D;
    --grey-1:  #212529;
    --grey-2:  #495057;
    --grey-3:  #868E96;
    --grey-4:  #ADB5BD;
    --grey-5:  #ADB5BD;
    --grey-6:  #DEE2E6;
    --grey-7:  #E9ECEF;
    --grey-8:  #F1F3F5;
    --grey-9:  #F8F9FA;
    --grey-10: #FDFDFD;

    --white-fixed: #FFFFFF;

    /* alerts */
    --alert-1: #cd2b31;
    --alert-2: #fdd8d8;
    --alert-3: #ffe5e5;

    /* success */
    --succes-1: #18794e;
    --succes-2: #ccebd7;
    --succes-3: #ddf3e4;

    /* color random profile */
    --random-1 : #e34d8c;
    --random-2 : #c04277;
    --random-3 : #7d2a4d;
    --random-4 : #7000ff;
    --random-5 : #6200e3;
    --random-6 : #36007d;
    --random-7 : #349974;
    --random-8 : #2a7d5f;
    --random-9 : #153d2e;
    --random-10 :#6100ff;
    --random-11 :#5700e3;
    --random-12 :#30007d;

    //Typography

    --heading-1-700 : 44px 700 'Lexend', sans-serif;
    --heading-2-600 : 36px 600 'Lexend', sans-serif;
    --heading-3-600 : 32px 600 'Lexend', sans-serif;
    --heading-3-500 : 32px 500 'Lexend', sans-serif;
    --heading-4-600 : 28px 600 'Lexend', sans-serif;
    --heading-4-500 : 28px 500 'Lexend', sans-serif;
    --heading-5-600 : 24px 600 'Lexend', sans-serif;
    --heading-5-500 : 24px 500 'Lexend', sans-serif;
    --heading-6-600 : 20px 600 'Lexend', sans-serif;
    --heading-6-500 : 20px 500 'Lexend', sans-serif;
    --heading-7-600 : 16px 600 'Lexend', sans-serif;
    --heading-7-500 : 16px 500 'Lexend', sans-serif;

    --body-1-400: 16px 400 'Inter',sans-serif;
    --body-1-600: 16px 600 'Inter',sans-serif;
    --body-2-400: 14px 400 'Inter',sans-serif;
    --body-2-500: 14px 500 'Inter',sans-serif;

    --button-big-text: 16px 600 'Inter',sans-serif;
    --button-medium-text:14px 600 'Inter',sans-serif;
    --input-placeholder:16px 400 'Inter',sans-serif;
    --input-label:14px 500 'Inter',sans-serif;

  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;
