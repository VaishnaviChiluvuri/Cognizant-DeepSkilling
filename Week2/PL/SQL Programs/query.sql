SET SERVEROUTPUT ON;

-- Drop tables if they already exist
BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE Loans';
EXCEPTION
   WHEN OTHERS THEN NULL;
END;
/

BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
   WHEN OTHERS THEN NULL;
END;
/

-- Create Customers table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

-- Create Loans table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert sample data
INSERT INTO Customers VALUES (1,'John',65,12000,'FALSE');
INSERT INTO Customers VALUES (2,'Alice',45,9000,'FALSE');
INSERT INTO Customers VALUES (3,'David',70,15000,'FALSE');

INSERT INTO Loans VALUES (101,1,10,SYSDATE+15);
INSERT INTO Loans VALUES (102,2,12,SYSDATE+45);
INSERT INTO Loans VALUES (103,3,9,SYSDATE+20);

COMMIT;

--------------------------------------------------
-- Scenario 1
--------------------------------------------------

BEGIN
   FOR c IN (SELECT CustomerID FROM Customers WHERE Age > 60)
   LOOP
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = c.CustomerID;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Scenario 1 Completed');
END;
/

SELECT * FROM Loans;

--------------------------------------------------
-- Scenario 2
--------------------------------------------------

BEGIN
   FOR c IN (SELECT CustomerID FROM Customers WHERE Balance > 10000)
   LOOP
      UPDATE Customers
      SET IsVIP='TRUE'
      WHERE CustomerID=c.CustomerID;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Scenario 2 Completed');
END;
/

SELECT * FROM Customers;

--------------------------------------------------
-- Scenario 3
--------------------------------------------------

BEGIN
  DBMS_OUTPUT.PUT_LINE('Scenario 3 Completed');
   FOR r IN
   (
      SELECT c.Name,l.LoanID,l.DueDate
      FROM Customers c
      JOIN Loans l
      ON c.CustomerID=l.CustomerID
      WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE+30
   )
   LOOP
      DBMS_OUTPUT.PUT_LINE(
      'Reminder: Dear '||r.Name||
      ', Loan ID '||r.LoanID||
      ' is due on '||TO_CHAR(r.DueDate,'DD-MON-YYYY'));
   END LOOP;
   
END;
/
