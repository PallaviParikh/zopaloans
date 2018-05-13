$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Zopa.feature");
formatter.feature({
  "line": 2,
  "name": "Open the Zopa website",
  "description": "As a user I want to navigate to Zopa website and complete the sign up form as a new Borrower.",
  "id": "open-the-zopa-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Get_Zopa_loan"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#    And Close the browser"
    }
  ],
  "line": 13,
  "name": "As a user I want to verify the interest rate and monthly cost for the loan amount",
  "description": "",
  "id": "open-the-zopa-website;as-a-user-i-want-to-verify-the-interest-rate-and-monthly-cost-for-the-loan-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Obtain_a_zopa_quote"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to Get a Zopa loan page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select loan amount of \"£15000\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the loan year \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Clicked on Get my personalised rates button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I naviagted to sign up page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I confirm the loan amount and term result box screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I entered the email address \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered the Title \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I entered the First name \"\u003cFirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I entered the Last name \"\u003cLast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I entered the Phone number \"\u003cPhone number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I entered the Date of birth \"\u003cDate of birth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I entered the Laon reason \"\u003cLoan reason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I entered the Postcode \"\u003cPostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Look up address Look up address",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select the first address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I entered the move in month and year \"\u003cmove in month\u003e\" \"\u003cmove in year\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on use this address command option",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select the employment status \"\u003cEmployment status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I entered the annual income before tax \"\u003cAnnual income\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Take a screen shot",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "open-the-zopa-website;as-a-user-i-want-to-verify-the-interest-rate-and-monthly-cost-for-the-loan-amount;",
  "rows": [
    {
      "cells": [
        "Email",
        "Title",
        "First name",
        "Last name",
        "Phone number",
        "Date of birth",
        "Loan reason",
        "Postcode",
        "address",
        "move in month",
        "move in year",
        "Employment status",
        "Annual income"
      ],
      "line": 38,
      "id": "open-the-zopa-website;as-a-user-i-want-to-verify-the-interest-rate-and-monthly-cost-for-the-loan-amount;;1"
    },
    {
      "cells": [
        "plvparih@gmail.com",
        "Ms",
        "Pallavi",
        "Parikh",
        "07432105689",
        "20/01/1990",
        "Debt consolidation",
        "TW5 9TY",
        "778a, Bath Road, Hounslow, Middlesex, TW5 9TY",
        "November",
        "2012",
        "Employed full-time",
        "50000"
      ],
      "line": 39,
      "id": "open-the-zopa-website;as-a-user-i-want-to-verify-the-interest-rate-and-monthly-cost-for-the-loan-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "As a user I want to verify the interest rate and monthly cost for the loan amount",
  "description": "",
  "id": "open-the-zopa-website;as-a-user-i-want-to-verify-the-interest-rate-and-monthly-cost-for-the-loan-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Get_Zopa_loan"
    },
    {
      "line": 12,
      "name": "@Obtain_a_zopa_quote"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to Get a Zopa loan page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select loan amount of \"£15000\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the loan year \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Clicked on Get my personalised rates button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I naviagted to sign up page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I confirm the loan amount and term result box screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I entered the email address \"plvparih@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I entered the Title \"Ms\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I entered the First name \"Pallavi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I entered the Last name \"Parikh\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I entered the Phone number \"07432105689\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I entered the Date of birth \"20/01/1990\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I entered the Laon reason \"Debt consolidation\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I entered the Postcode \"TW5 9TY\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Look up address Look up address",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select the first address \"778a, Bath Road, Hounslow, Middlesex, TW5 9TY\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I entered the move in month and year \"November\" \"2012\"",
  "matchedColumns": [
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on use this address command option",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select the employment status \"Employed full-time\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I entered the annual income before tax \"50000\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Take a screen shot",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ZopaStepDef.i_navigate_to_Get_a_Zopa_loan_page()"
});
formatter.result({
  "duration": 9099021624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£15000",
      "offset": 25
    }
  ],
  "location": "ZopaStepDef.i_select_loan_amount_of(String)"
});
formatter.result({
  "duration": 508377405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "ZopaStepDef.i_select_the_loan_year(String)"
});
formatter.result({
  "duration": 282318160,
  "status": "passed"
});
formatter.match({
  "location": "ZopaStepDef.i_Clicked_on_Get_my_personalised_rates_button()"
});
formatter.result({
  "duration": 146817414,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: (840, 1036.124984741211) is out of bounds of viewport width (1680) and height (891)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Rohits-MBP\u0027, ip: \u00272a00:23c5:469b:c100:49dd:8cdc:1c62:9d60\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/p8/3x1zqqls5gjf16zzl20vkpl80000gn/T/rust_mozprofile.Kkj2S8HDOiLd, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d57.0.4, platformVersion\u003d17.4.0, moz:processID\u003d68088.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003ddarwin, moz:webdriverClick\u003dfalse}]\nSession ID: a86aa1a5-314f-7a45-bcc5-078cac8830db\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:703)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:631)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:593)\n\tat stepdefs.ZopaStepDef.i_Clicked_on_Get_my_personalised_rates_button(ZopaStepDef.java:97)\n\tat ✽.When I Clicked on Get my personalised rates button(features/Zopa.feature:17)\n",
  "status": "failed"
});
formatter.match({
  "location": "ZopaStepDef.i_naviagted_to_sign_up_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ZopaStepDef.i_confirm_the_loan_amount_and_term_result_box_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "plvparih@gmail.com",
      "offset": 29
    }
  ],
  "location": "ZopaStepDef.i_entered_the_email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms",
      "offset": 21
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pallavi",
      "offset": 26
    }
  ],
  "location": "ZopaStepDef.i_entered_the_First_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Parikh",
      "offset": 25
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07432105689",
      "offset": 28
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Phone_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20/01/1990",
      "offset": 29
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Date_of_birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Debt consolidation",
      "offset": 27
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Laon_reason(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TW5 9TY",
      "offset": 24
    }
  ],
  "location": "ZopaStepDef.i_entered_the_Postcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ZopaStepDef.i_click_on_use_this_address_command_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 40
    }
  ],
  "location": "ZopaStepDef.i_entered_the_annual_income_before_tax(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ZopaStepDef.i_Take_a_screen_shot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});