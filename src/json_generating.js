const links = [
    'https://www.jdoodle.com/embed/v0/6nXs',
    'https://www.jdoodle.com/embed/v0/6nXu',
    'https://www.jdoodle.com/embed/v0/6nXw',
    'https://www.jdoodle.com/embed/v0/6nXy',
    'https://www.jdoodle.com/embed/v0/6nXA',
    'https://www.jdoodle.com/embed/v0/6nXV',
    'https://www.jdoodle.com/embed/v0/6nXW',
    'https://www.jdoodle.com/embed/v0/6nXZ',
    'https://www.jdoodle.com/embed/v0/6nY0',
    'https://www.jdoodle.com/embed/v0/6nY1',
    'https://www.jdoodle.com/embed/v0/6nY2',
    'https://www.jdoodle.com/embed/v0/6nY4',
    'https://www.jdoodle.com/h/33N',
    'https://www.jdoodle.com/embed/v0/6nY5',
    'https://www.jdoodle.com/embed/v0/6nY6',
    'https://www.jdoodle.com/embed/v0/6nYL',
    'https://www.jdoodle.com/embed/v0/6nYM',
    'https://www.jdoodle.com/embed/v0/6nYN',
    'https://www.jdoodle.com/embed/v0/6nYO',
    'https://www.jdoodle.com/embed/v0/6nYQ',
    'https://www.jdoodle.com/embed/v0/6nZ3',
    'https://www.jdoodle.com/embed/v0/6nZ4',
    'https://www.jdoodle.com/embed/v0/6nZ5',
    'https://www.jdoodle.com/embed/v0/6nZ6',
    'https://www.jdoodle.com/embed/v0/6nZ7',
    'https://www.jdoodle.com/embed/v0/6nZb',
    'https://www.jdoodle.com/embed/v0/6nZc',
    'https://www.jdoodle.com/embed/v0/6nZd',
    'https://www.jdoodle.com/embed/v0/6nZh',
    'https://www.jdoodle.com/embed/v0/6nZi',
    'https://www.jdoodle.com/embed/v0/6nZj',
    'https://www.jdoodle.com/embed/v0/6nZk',
    'https://www.jdoodle.com/embed/v0/6nZl',
    'https://www.jdoodle.com/embed/v0/6nZn',
    'https://www.jdoodle.com/embed/v0/6nZp',
    'https://www.jdoodle.com/embed/v0/6nZs',
    'https://www.jdoodle.com/embed/v0/6nZt',
    'https://www.jdoodle.com/embed/v0/6nZu',
    'https://www.jdoodle.com/embed/v0/6nZv',
    'https://www.jdoodle.com/embed/v0/6nZw',
    'https://www.jdoodle.com/embed/v0/6nZz',
    'https://www.jdoodle.com/embed/v0/6nZA',
    'https://www.jdoodle.com/embed/v0/6nZB',
    'https://www.jdoodle.com/embed/v0/6nZD',
    'https://www.jdoodle.com/embed/v0/6nZH',
    'https://www.jdoodle.com/embed/v0/6nZK',
    'https://www.jdoodle.com/embed/v0/6nZN',
    'https://www.jdoodle.com/embed/v0/6nZO',
    'https://www.jdoodle.com/embed/v0/6nZP',
    'https://www.jdoodle.com/embed/v0/6nZQ',

  ];
  const questions=[
    '1. Write a JavaScript function to check whether an `input` is an array or not.',
    '2. Write a JavaScript function to clone an array.',
    '3.Write a JavaScript function to get the first element of an array. Passing the parameter \'n\' will return the first \'n\' elements of the array ',
    '4. Write a JavaScript function to get the last element of an array. Passing the parameter \'n\' will return the last \'n\' elements of the array.',
    '5. Write a simple JavaScript program to join all elements of the following array into a string.',
    '6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.',
    '7. Write a JavaScript program to sort the items of an array.',
    '8. Write a JavaScript program to find the most frequent item in an array.',
    '9. Write a JavaScript program that accepts a string as input and swaps the case of each character',
    '10. Write a JavaScript program that prints the elements of the following array.',
    '11. Write a JavaScript program to find the sum of squares of a numerical vector.',
    '12. Write a JavaScript program to compute the sum and product of an array of integers.',
    '13. Write a JavaScript program to add items to a blank array and display them.',
    '14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).',
    '15. Write a javascript program to give ordinal values to the array elements',
    '16. Write a JavaScript program to find the leap years in a given range of years.',
    '17. Write a JavaScript program to shuffle an array.',
    '18. Write a JavaScript program to perform a binary search.',
    '19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.',
    '20. Write a JavaScript program to find duplicate values in a JavaScript array.',
    '21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.',
    '22. Write a JavaScript program to compute the union of two arrays.',
    '23. Write a JavaScript function to find the difference between two arrays.',
    '24. Write a JavaScript function to remove. null, 0, "", false, undefined and NaN values from an array.',
    '25. Write a JavaScript function to sort the following array of objects by title value.',
    '26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.',
    '27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.',
    '28. Write a JavaScript function to find the longest common starting substring in a set of strings.',
    '29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.',
    '30. Write a JavaScript function that merges two arrays and removes all duplicate elements.',
    '31. Write a JavaScript function to remove a specific element from an array.',
    '32. Write a JavaScript function to find an array containing a specific element.',
    '33. Write a JavaScript script to empty an array while keeping the original.',
    '34. Write a JavaScript function to get the nth largest element from an unsorted array.',
    '35. Write a JavaScript function to get random items from an array.',
    '36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.',
    '37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.',
    '38. Write a JavaScript function to move an array element from one position to another.',
    '39. Write a JavaScript function to filter false, null, 0 and blank values from an array.',
    '40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.',
    '41. Write a JavaScript function to generate an array between two integers of 1 step length.',
    '42. Write a JavaScript function to find unique elements in two arrays.',
    '43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.',
    '44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.',
    '45. Write a JavaScript program to find all the unique values in a set of numbers.',
    '46. Write a JavaScript program to generate all permutations of an arrays elements (including duplicates).',
    '47. Write a JavaScript program to remove all false values from an object or array.',
    '48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.',
    '49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.',
    '50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.',


  ];
  const cardData = links.map((link, index) => ({
    id: index + 1,
    link: link,
    question: questions[index],
  }));
  
  const jsonData = JSON.stringify(cardData);
  console.log(jsonData)
  