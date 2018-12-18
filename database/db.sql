SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `crudnodejsmysql`
--

-- --------------------------------------------------------

--
-- Structure de la table `marsubilami`
--

CREATE TABLE `marsubilami` (
  `id` int(11) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `mdp` varchar(20) DEFAULT NULL,
  `age` varchar(11) NOT NULL,
  `famille` varchar(50) NOT NULL,
  `race` varchar(50) NOT NULL,
  `nouriture` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `marsubilami`
--
ALTER TABLE `marsubilami`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `marsubilami`
--
ALTER TABLE `marsubilami`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;