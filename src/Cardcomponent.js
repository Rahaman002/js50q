import React, { useState } from 'react';
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export default function Cardcomponent() {
const data=  [
    {
      "id": 1,
      "link": "https://www.jdoodle.com/embed/v0/6nXs",
      "question": "1. Write a JavaScript function to check whether an `input` is an array or not."
    },
    {
      "id": 2,
      "link": "https://www.jdoodle.com/embed/v0/6nXu",
      "question": "2. Write a JavaScript function to clone an array."
    },
    {
      "id": 3,
      "link": "https://www.jdoodle.com/embed/v0/6nXw",
      "question": "3.Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array "
    },
    {
      "id": 4,
      "link": "https://www.jdoodle.com/embed/v0/6nXy",
      "question": "4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array."
    },
    {
      "id": 5,
      "link": "https://www.jdoodle.com/embed/v0/6nXA",
      "question": "5. Write a simple JavaScript program to join all elements of the following array into a string."
    },
    {
      "id": 6,
      "link": "https://www.jdoodle.com/embed/v0/6nXV",
      "question": "6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8."
    },
    {
      "id": 7,
      "link": "https://www.jdoodle.com/embed/v0/6nXW",
      "question": "7. Write a JavaScript program to sort the items of an array."
    },
    {
      "id": 8,
      "link": "https://www.jdoodle.com/embed/v0/6nXZ",
      "question": "8. Write a JavaScript program to find the most frequent item in an array."
    },
    {
      "id": 9,
      "link": "https://www.jdoodle.com/embed/v0/6nY0",
      "question": "9. Write a JavaScript program that accepts a string as input and swaps the case of each character"
    },
    {
      "id": 10,
      "link": "https://www.jdoodle.com/embed/v0/6nY1",
      "question": "10. Write a JavaScript program that prints the elements of the following array."
    },
    {
      "id": 11,
      "link": "https://www.jdoodle.com/embed/v0/6nY2",
      "question": "11. Write a JavaScript program to find the sum of squares of a numerical vector."
    },
    {
      "id": 12,
      "link": "https://www.jdoodle.com/embed/v0/6nY4",
      "question": "12. Write a JavaScript program to compute the sum and product of an array of integers."
    },
    {
      "id": 13,
      "link": "https://www.jdoodle.com/h/33N",
      "question": "13. Write a JavaScript program to add items to a blank array and display them."
    },
    {
      "id": 14,
      "link": "https://www.jdoodle.com/embed/v0/6nY5",
      "question": "14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)."
    },
    {
      "id": 15,
      "link": "https://www.jdoodle.com/embed/v0/6nY6",
      "question": "15. Write a javascript program to give ordinal values to the array elements"
    },
    {
      "id": 16,
      "link": "https://www.jdoodle.com/embed/v0/6nYL",
      "question": "16. Write a JavaScript program to find the leap years in a given range of years."
    },
    {
      "id": 17,
      "link": "https://www.jdoodle.com/embed/v0/6nYM",
      "question": "17. Write a JavaScript program to shuffle an array."
    },
    {
      "id": 18,
      "link": "https://www.jdoodle.com/embed/v0/6nYN",
      "question": "18. Write a JavaScript program to perform a binary search."
    },
    {
      "id": 19,
      "link": "https://www.jdoodle.com/embed/v0/6nYO",
      "question": "19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array."
    },
    {
      "id": 20,
      "link": "https://www.jdoodle.com/embed/v0/6nYQ",
      "question": "20. Write a JavaScript program to find duplicate values in a JavaScript array."
    },
    {
      "id": 21,
      "link": "https://www.jdoodle.com/embed/v0/6nZ3",
      "question": "21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level."
    },
    {
      "id": 22,
      "link": "https://www.jdoodle.com/embed/v0/6nZ4",
      "question": "22. Write a JavaScript program to compute the union of two arrays."
    },
    {
      "id": 23,
      "link": "https://www.jdoodle.com/embed/v0/6nZ5",
      "question": "23. Write a JavaScript function to find the difference between two arrays."
    },
    {
      "id": 24,
      "link": "https://www.jdoodle.com/embed/v0/6nZ6",
      "question": "24. Write a JavaScript function to remove. null, 0, \"\", false, undefined and NaN values from an array."
    },
    {
      "id": 25,
      "link": "https://www.jdoodle.com/embed/v0/6nZ7",
      "question": "25. Write a JavaScript function to sort the following array of objects by title value."
    },
    {
      "id": 26,
      "link": "https://www.jdoodle.com/embed/v0/6nZb",
      "question": "26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number."
    },
    {
      "id": 27,
      "link": "https://www.jdoodle.com/embed/v0/6nZc",
      "question": "27. Write a JavaScript function to retrieve the value of a given property from all elements in an array."
    },
    {
      "id": 28,
      "link": "https://www.jdoodle.com/embed/v0/6nZd",
      "question": "28. Write a JavaScript function to find the longest common starting substring in a set of strings."
    },
    {
      "id": 29,
      "link": "https://www.jdoodle.com/embed/v0/6nZh",
      "question": "29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds."
    },
    {
      "id": 30,
      "link": "https://www.jdoodle.com/embed/v0/6nZi",
      "question": "30. Write a JavaScript function that merges two arrays and removes all duplicate elements."
    },
    {
      "id": 31,
      "link": "https://www.jdoodle.com/embed/v0/6nZj",
      "question": "31. Write a JavaScript function to remove a specific element from an array."
    },
    {
      "id": 32,
      "link": "https://www.jdoodle.com/embed/v0/6nZk",
      "question": "32. Write a JavaScript function to find an array containing a specific element."
    },
    {
      "id": 33,
      "link": "https://www.jdoodle.com/embed/v0/6nZl",
      "question": "33. Write a JavaScript script to empty an array while keeping the original."
    },
    {
      "id": 34,
      "link": "https://www.jdoodle.com/embed/v0/6nZn",
      "question": "34. Write a JavaScript function to get the nth largest element from an unsorted array."
    },
    {
      "id": 35,
      "link": "https://www.jdoodle.com/embed/v0/6nZp",
      "question": "35. Write a JavaScript function to get random items from an array."
    },
    {
      "id": 36,
      "link": "https://www.jdoodle.com/embed/v0/6nZs",
      "question": "36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array."
    },
    {
      "id": 37,
      "link": "https://www.jdoodle.com/embed/v0/6nZt",
      "question": "37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array."
    },
    {
      "id": 38,
      "link": "https://www.jdoodle.com/embed/v0/6nZu",
      "question": "38. Write a JavaScript function to move an array element from one position to another."
    },
    {
      "id": 39,
      "link": "https://www.jdoodle.com/embed/v0/6nZv",
      "question": "39. Write a JavaScript function to filter false, null, 0 and blank values from an array."
    },
    {
      "id": 40,
      "link": "https://www.jdoodle.com/embed/v0/6nZw",
      "question": "40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length."
    },
    {
      "id": 41,
      "link": "https://www.jdoodle.com/embed/v0/6nZz",
      "question": "41. Write a JavaScript function to generate an array between two integers of 1 step length."
    },
    {
      "id": 42,
      "link": "https://www.jdoodle.com/embed/v0/6nZA",
      "question": "42. Write a JavaScript function to find unique elements in two arrays."
    },
    {
      "id": 43,
      "link": "https://www.jdoodle.com/embed/v0/6nZB",
      "question": "43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip."
    },
    {
      "id": 44,
      "link": "https://www.jdoodle.com/embed/v0/6nZD",
      "question": "44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value."
    },
    {
      "id": 45,
      "link": "https://www.jdoodle.com/embed/v0/6nZH",
      "question": "45. Write a JavaScript program to find all the unique values in a set of numbers."
    },
    {
      "id": 46,
      "link": "https://www.jdoodle.com/embed/v0/6nZK",
      "question": "46. Write a JavaScript program to generate all permutations of an arrays elements (including duplicates)."
    },
    {
      "id": 47,
      "link": "https://www.jdoodle.com/embed/v0/6nZN",
      "question": "47. Write a JavaScript program to remove all false values from an object or array."
    },
    {
      "id": 48,
      "link": "https://www.jdoodle.com/embed/v0/6nZO",
      "question": "48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true."
    },
    {
      "id": 49,
      "link": "https://www.jdoodle.com/embed/v0/6nZP",
      "question": "49. Write a JavaScript program that takes an array of numbers and returns the third smallest number."
    },
    {
      "id": 50,
      "link": "https://www.jdoodle.com/embed/v0/6nZQ",
      "question": "50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers."
    }
  ]
  
  
  let cards = [];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLink, setSelectedLink] = React.useState('');
  const [count,setcount]=useState(1);

  const handleOpenModal = (link) => {
    setSelectedLink(link);
    onOpen();
  };

 
  data.map((ele,i)=>{ 
    const link = ele.link;
    cards.push(
      <Card key={ele.id} align='center' minH={270} variant='outline'  className="custom-card">
        <CardBody>
          <Text margin={4}>{ele.question}</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={() => handleOpenModal(link)} colorScheme='messenger'>View code</Button>
        </CardFooter>
      </Card>
    );
  
});

  return (
    <SimpleGrid spacing={1} p={6} justifyContent={"space-between"} templateColumns={"repeat(auto-fit, minmax(30em, 1fr));"}>
      {cards}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" h="100%">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody size="9xl" height={200}>
            {selectedLink && <iframe
              src={selectedLink}
              title="Embedded Code"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </SimpleGrid> 
  );
}
