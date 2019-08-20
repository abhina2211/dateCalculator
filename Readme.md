
 DATE CALCULATOR
 ----------------------------------
 
 This is a command line Nodejs program to calculate number of days between two given dates.
 
 Please use the following command to execute the program
 
 1. To initialize and install all the required modules listed in the package.json and package-lock.json file
 
         npm init
 
 2. To execute the program 
    
         node dateCalculator.js
 
 After the program starts, enter the Start/From date and End/To date ad press ENTER. The program will display the number of days elapsed between two given dates.
 Program is capable of handling exclusion of partial days from the calculation.
 
 -------------------------------------
 OTHER APPLICATIONS OF THE PROGRAM
 -------------------------------------
 
 With few modification and enhancements this program can have various applications. Some of the uses are listed as below:
 
 1. Calculate the age of the document uploaded or last used and suggest users to change the storage class of the document to optimize cost.
 
 2. Identify the inactive members and send follow-up emails or check the active date and members since dates to effectively organize promotion campaign.
 
 ------------------------------------
 POSSIBLE ENHANCEMENTS
 ------------------------------------
 
 Some of the enhancement coming in the later version can be:
 
 1. Different Input Source:
    Dates can be input from following sources:
      a. CSV File
      b. RDBMS / NoSQL database
      c. Another API
 
 2. GUI Access:
      a. The program can be enhanced to get the from/to dates from a web page and display the result as an HTML output.
      b. When the documents are uploaded using CSV (having from and to date as values) the program can calculate the number of days and   display it along with the document upload details.
