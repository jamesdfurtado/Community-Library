#ifndef CSC_212_PROJECT_BOOK_H
#define CSC_212_PROJECT_BOOK_H

#include <iostream>
#include <string>

// This is our book class which will hold
// all of our data for each book

class Book {
public:
    Book(Book *pBook);

// Data
    std::string title;
    std::string author;
    std::string NF_F; // Non-Fiction or Fiction
    std::string genre;
    std::string type;
    int length;
    int serial;


    // Constructor
    Book(std::string title, std::string author, std::string NF_F, std::string genre, std::string type, int length);
    ~Book();

    int createSerial();
    void printBook();
};



#endif //CSC_212_PROJECT_BOOK_H
