
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
 TEST CASE RESULT
 -------------------------------------
 
Following test case were used to verify the program:

 1. 02/06/1983 - 22/06/1983 => 19 days
 
 2. 04/07/1984 - 25/12/1984 => 173 days
 
 3. 03/01/1989 - 03/08/1983 => 1979 days
 
Result of Test case execution can be found in the repo under following filenames:
 1. dateCalculatorTestREsult1.png (Test case 1 & Test case 2)
 
 2. dateCalculatorTestREsult2.png (Test case 3)
 
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
 
    Dates input can be from following sources.
    
     1. CSV File
     2. RDBMS / NoSQL database
     3. Another API
 
 2. GUI Access:
      1. The program can be enhanced to get the from/to dates from a web page and display the result as an HTML output.
      2. When the documents are uploaded using CSV (having from and to date as values) the program can calculate the number of days and   display it along with the document upload details.
