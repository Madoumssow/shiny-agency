import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
/* // Importation du composant Link depuis react-router-dom pour créer des liens de navigation
import { Link } from 'react-router-dom'

// Importation de l'objet colors, qui contient probablement des couleurs personnalisées utilisées dans le projet
import colors from './colors'

// Importation de styled-components pour créer des composants stylisés en utilisant du CSS dans JavaScript
import styled, { keyframes } from 'styled-components'

// Définition d'une animation keyframes pour une rotation
const rotate = keyframes`
  from {
    transform: rotate(0deg); // Point de départ de la rotation
  }

  to {
    transform: rotate(360deg); // Rotation complète (360 degrés)
  }
`

// Création d'un composant stylisé appelé 'Loader' qui est un div
export const Loader = styled.div`
  padding: 10px; // Espace intérieur de 10px
  border: 6px solid ${colors.primary}; // Bordure de 6px de large utilisant la couleur primaire définie dans colors
  border-bottom-color: transparent; // La partie inférieure de la bordure est transparente pour donner un effet de rotation
  border-radius: 22px; // Arrondit les coins du div
  animation: ${rotate} 1s infinite linear; // Applique l'animation de rotation définie plus haut, avec une durée d'1 seconde, de manière infinie et avec une rotation linéaire
  height: 0; // Hauteur de 0 pour que la bordure définisse la taille visible
  width: 0; // Largeur de 0, similaire à la hauteur pour que la bordure apparaisse seule
`

// Création d'un autre composant stylisé appelé 'StyledLink' qui est basé sur le composant Link de react-router-dom
export const StyledLink 
*/

/*************************************************************************************************
 Explication détaillée :
Imports :

Link : Ce composant est utilisé pour créer des liens de navigation dans React sans recharger la page.
colors : Un objet probablement importé contenant des valeurs de couleurs personnalisées, comme colors.primary utilisé ici.
styled et keyframes de styled-components : styled est utilisé pour créer des composants stylisés, tandis que keyframes permet de définir des animations CSS directement dans JavaScript.
Animation rotate :

La constante rotate définit une animation CSS qui fait tourner un élément de 0 à 360 degrés. C'est une simple rotation qui tourne à l'infini quand elle est appliquée.
Composant Loader :

Loader est un div stylisé avec plusieurs propriétés CSS pour ressembler à un indicateur de chargement.
Bordure : Il a une bordure circulaire, dont la partie inférieure est transparente, ce qui donne un effet de "charge" lors de la rotation.
Animation : L'animation rotate est appliquée pour faire tourner cet élément continuellement, ce qui est typique d'un spinner de chargement.
Composant StyledLink :

StyledLink est un lien stylisé basé sur le composant Link de react-router-dom, ce qui signifie qu'il peut être utilisé pour naviguer entre les pages de votre application.
Styles conditionnels : Le composant ajuste sa couleur de texte en fonction du thème reçu via le prop $theme (clair ou sombre).
Styles supplémentaires avec $isFullLink : Si le prop $isFullLink est passé et vrai, des styles supplémentaires sont appliqués, comme un arrière-plan coloré et un arrondi des coins, ce qui est utile pour transformer ce lien en bouton.
Conclusion :
Ce code utilise styled-components pour créer des composants réutilisables avec des styles CSS dans une syntaxe JavaScript. Il inclut un loader avec une animation de rotation et un lien stylisé qui change de style en fonction des propriétés dynamiques ($theme et $isFullLink). Cela permet d'ajouter facilement des animations et des styles réactifs tout en gardant le code organisé et modulaire.
 */