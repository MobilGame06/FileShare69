-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Erstellungszeit: 07. Jul 2022 um 14:26
-- Server-Version: 10.6.5-MariaDB-1:10.6.5+maria~focal
-- PHP-Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `file-test`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `path` tinytext NOT NULL,
  `originalName` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `downloadCount` int(11) NOT NULL,
  `urlid` tinytext NOT NULL,
  `maxDownload` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `files`
--

INSERT INTO `files` (`id`, `path`, `originalName`, `password`, `downloadCount`, `urlid`, `maxDownload`) VALUES
(43, 'uploads\\de39725128a98cebaa36fa4b17c749d9', 'Test.png', '$2b$10$Au6uorjD6KScbrFaGGb3A.m1QVly2HVm6nc6eLZsfYbc0BZSzmveC', 1, 'pbkufscEBxnq8x7nTBLS', 10);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
