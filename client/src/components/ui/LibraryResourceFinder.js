"use client"

import { useState } from "react"

const LibraryResourceFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState(['data structures', 'machine learning', 'VLSI design']);

  // Sample library resources data
  const resources = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      authors: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
      type: 'book',
      department: 'CSE',
      year: '2009',
      publisher: 'MIT Press',
      availability: 'Available (5 copies)',
      location: 'Main Library - Section A, Shelf 3',
      coverImage: '/placeholder.svg?height=150&width=100',
      description: 'A comprehensive introduction to the modern study of computer algorithms.',
      tags: ['algorithms', 'computer science', 'data structures'],
    },
    {
      id: 2,
      title: 'Artificial Intelligence: A Modern Approach',
      authors: 'Stuart Russell, Peter Norvig',
      type: 'book',
      department: 'CSE',
      year: '2020',
      publisher: 'Pearson',
      availability: 'Available (3 copies)',
      location: 'Main Library - Section B, Shelf 1',
      coverImage: '/placeholder.svg?height=150&width=100',
      description: 'The leading textbook in Artificial Intelligence, used in over 1500 universities worldwide.',
      tags: ['artificial intelligence', 'machine learning', 'computer science'],
    },
    {
      id: 3,
      title: 'IEEE Transactions on Neural Networks and Learning Systems',
      authors: 'Various',
      type: 'journal',
      department: 'CSE',
      year: '2023',
      publisher: 'IEEE',
      availability: 'Available (Online Access)',
      location: 'Digital Library',
      coverImage: '/placeholder.svg?height=150&width=100',
      description: 'A journal focused on the science and technology of neural networks and related learning systems.',
      tags: ['neural networks', 'machine learning', 'IEEE'],
      url: 'https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385',
    },
    {
      id: 4,
      title: 'Principles of Electronic Materials and Devices',
      authors: 'S.O. Kasap',
      type: 'book',
      department: 'ECE',
      year: '2017',
      publisher: 'McGraw-Hill',
      availability: 'Available (2 copies)',
      location: 'Main Library - Section C, Shelf 4',
      coverImage: '/placeholder.svg?height=150&width=100',
      description: 'A comprehensive introduction to principles of electronic materials and devices.',
      tags: ['electronics', 'materials science\', '
\
