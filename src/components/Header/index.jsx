// Importation des dépendances nécessaires
import { Link } from 'react-router-dom'; // Composant Link pour la navigation entre les pages
import styled from 'styled-components'; // Bibliothèque pour le style des composants
import { StyledLink } from '../../utils/style/Atoms'; // Composant de lien stylisé personnalisé
import LightLogo from '../../assets/light-logo.png'; // Logo clair
import DarkLogo from '../../assets/dark-logo.png'; // Logo sombre
import { useTheme } from '../../utils/hooks'; // Hook personnalisé pour obtenir le thème actuel

// Définition d'un composant stylisé pour l'image du logo
const HomeLogo = styled.img`
  height: 70px; // Définition de la hauteur de l'image
`;

// Définition d'un conteneur de navigation stylisé
const NavContainer = styled.nav`
  padding: 30px; // Espacement autour du conteneur
  display: flex; // Utilisation de flexbox pour la mise en page
  justify-content: space-between; // Espacement égal entre les éléments enfants
  align-items: center; // Alignement des éléments sur l'axe vertical
`;

// Définition du composant Header
function Header() {
  // Utilisation du hook personnalisé pour obtenir le thème actuel
  const { theme } = useTheme();

  // Rendu du composant
  return (
    <NavContainer>
      {/* Lien vers la page d'accueil */}
      <Link to="/">
        {/* Affichage du logo en fonction du thème (clair ou sombre) */}
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <div>
        {/* Liens vers d'autres pages avec le thème actuel */}
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  );
}

// Exportation du composant Header pour l'utiliser dans d'autres fichiers
export default Header;

/************************************************************************************************
 * Explication générale
Imports : Le code commence par importer des dépendances et des ressources nécessaires, comme des composants de style, des images, et des hooks personnalisés pour gérer le thème.

Composants stylisés : Utilisation de styled-components pour créer des composants avec des styles encapsulés. Cela permet de garder les styles proches de la logique de rendu.

Fonction Header : Le composant principal qui rend la barre de navigation. Il utilise le hook useTheme pour déterminer quel logo afficher en fonction du thème (clair ou sombre).

Rendu JSX : Le composant retourne une structure JSX qui représente la barre de navigation. Il utilise le composant Link pour la navigation entre les pages de l'application, et StyledLink pour les liens stylisés supplémentaires.
 */