-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2017 at 12:18 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hosts`
--

-- --------------------------------------------------------

--
-- Table structure for table `domains`
--

CREATE TABLE `domains` (
  `id` int(11) NOT NULL,
  `id_host` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `buy_it` varchar(100) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `url` varchar(150) NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domains`
--

INSERT INTO `domains` (`id`, `id_host`, `name`, `buy_it`, `username`, `password`, `phone`, `url`, `client_name`, `start_time`, `end_time`) VALUES
(1, 1, 'eoc.lk', 'Lankan Host', 'eoclk', 'U2FsdGVkX1+nJVTvff417kT69j1a2hzjIVpd2M73KCU=', 757174516, 'http://eoc.lk/', 'Essence of craft', '2016-10-01 00:00:00', '2017-12-30 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `host`
--

CREATE TABLE `host` (
  `id_host` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(35) NOT NULL,
  `password` varchar(100) NOT NULL,
  `disk_space` decimal(11,0) NOT NULL,
  `databases` int(11) NOT NULL,
  `addon_domains` int(11) NOT NULL,
  `bandwidth` decimal(11,0) NOT NULL,
  `purchases` varchar(30) NOT NULL,
  `url` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `host`
--

INSERT INTO `host` (`id_host`, `name`, `username`, `password`, `disk_space`, `databases`, `addon_domains`, `bandwidth`, `purchases`, `url`, `phone`, `start_time`, `end_time`) VALUES
(1, 'umtdlk', 'umtdlk', 'U2FsdGVkX19t5IOF1nolu9rt/GlLODBXD4nNmDobKy8=', '1', 10, 3, '146', 'Lankan Host', 'http://umtd.lk/', 114662662, '2017-07-01 00:00:00', '2017-07-29 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `domains`
--
ALTER TABLE `domains`
  ADD PRIMARY KEY (`id`,`id_host`);

--
-- Indexes for table `host`
--
ALTER TABLE `host`
  ADD PRIMARY KEY (`id_host`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `domains`
--
ALTER TABLE `domains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `host`
--
ALTER TABLE `host`
  MODIFY `id_host` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
