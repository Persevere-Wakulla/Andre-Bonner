import React from "react";

export default function HashMap() {
    //todo: Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. 
    //? In DNA STRINGS, symbols A and T are complements of each other, as C and G. Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
    //* "AATGC" --> "TAACG"
    //* "GTAT" --> "CATA"

    function DNAStrand(dna) {
        let str = dna.toUpperCase()
        let empty = [];
        //! The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
        str.split('').forEach((item) => {
            //! The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain. Read the iterative methods section for more information about how these methods work in general.
            return item === 'A' ? empty.push('T') : item === 'T' ? empty.push('A') : item === 'C' ? empty.push('G') : empty.push('C');
        });
        return empty.join('')
        //! The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
    }
    console.log(DNAStrand("tagc"));

    function DNAHashTable(string) {
        //todo: create an obj
        //! In JavaScript, objects can be seen as a collection of properties.With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed.Property values can be values of any type, including other objects, which enables building complex data structures.Properties are identified using key values.A key value is either a String value or a Symbol value.There are two types of object properties: The data property and the accessor property.
        const pairings = {
            A:'T',
            T:'A',
            C:'G',
            G:'C'
        }
        return string.toUpperCase().split('').map((item) => pairings[item]).join('')
    }

    console.log(DNAHashTable("agct"))
    return (
        <section>
            {/* <p>{DNAStrand("tata")}</p> */}
        </section>
    )
}