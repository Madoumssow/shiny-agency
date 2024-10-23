// Importation des bibliothèques et des fichiers nécessaires
import { useTheme } from '../../utils/hooks' // Importation d'un hook pour gérer le thème (clair ou sombre)
import styled from 'styled-components' // Importation de styled-components pour le style des composants
import colors from '../../utils/style/colors' // Importation d'un module de couleurs
import EmailInput from '../EmailInput' // Importation du composant EmailInput

// Création d'un conteneur stylisé pour le footer
const FooterContainer = styled.footer`
  display: flex; // Utilisation de Flexbox pour la mise en page
  flex-direction: column; // Les éléments enfants seront disposés en colonne
  align-items: center; // Centrer les éléments horizontalement
  justify-content: center; // Centrer les éléments verticalement
  padding: 60px 0; // Espacement supérieur et inférieur de 60px
`

// Création d'un bouton stylisé pour le mode nuit
const NightModeButton = styled.button`
  background-color: transparent; // Fond transparent pour le bouton
  border: none; // Pas de bordure
  cursor: pointer; // Changement du curseur pour indiquer que le bouton est cliquable
  color: ${colors.secondary}; // Couleur du texte selon la palette de couleurs
  padding-top: 30px; // Espacement supérieur de 30px
`

// Définition du composant Footer
function Footer() {
  const { toggleTheme, theme } = useTheme() // Utilisation du hook useTheme pour obtenir la fonction de changement de thème et le thème actuel

  // Rendu du composant
  return (
    <FooterContainer> {/* Conteneur du footer */}
      <EmailInput theme={theme} /> {/* Inclusion du composant EmailInput avec le thème passé en prop */}
      <NightModeButton onClick={() => toggleTheme()}> {/* Bouton pour changer le thème */}
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'} {/* Texte qui change selon le thème actuel */}
      </NightModeButton>
    </FooterContainer>
  )
}

// Exportation du composant pour utilisation dans d'autres fichiers
export default Footer
/********************************************************************************************************
 * Explication détaillée du code :
Imports :

useTheme : Importé depuis un hook personnalisé qui permet de gérer l'état du thème (clair ou sombre) de l'application.
styled : Importé depuis styled-components, il permet de créer des composants stylisés en utilisant des styles CSS.
colors : Importé depuis un fichier de style utilitaire, il contient une palette de couleurs à utiliser dans les styles des composants.
EmailInput : Importation du composant EmailInput, qui est utilisé pour afficher un champ de saisie d'adresse email.
Styled Components :

FooterContainer : Un composant footer stylisé qui sert de conteneur pour tout le contenu du pied de page. Il utilise Flexbox pour centrer les éléments verticalement et horizontalement, avec un espacement vertical de 60px.
NightModeButton : Un bouton stylisé qui change le thème de l'application. Il a un fond transparent, sans bordure, et utilise une couleur secondaire pour le texte. Le curseur change pour indiquer qu'il est cliquable, et il a un espacement supérieur de 30px.
Composant Footer :

Définition : La fonction Footer est un composant fonctionnel qui utilise le hook useTheme pour obtenir la fonction toggleTheme (pour changer le thème) et le thème actuel.
Rendu :
Le composant retourne un FooterContainer qui contient :
Un composant EmailInput, qui reçoit le thème actuel en tant que prop pour s'assurer qu'il s'affiche correctement selon le thème (clair ou sombre).
Un NightModeButton qui appelle la fonction toggleTheme lorsque l'utilisateur clique dessus, ce qui permet de changer le thème. Le texte du bouton change dynamiquement pour afficher un soleil (☀️) lorsque le thème est clair et une lune (🌙) lorsque le thème est sombre.
Exportation :

Le composant Footer est exporté pour être utilisé dans d'autres parties de l'application, comme dans les pages principales ou d'autres composants.
Objectif du composant :
Le composant Footer est conçu pour fournir une interface utilisateur simple dans le pied de page de l'application. Il permet à l'utilisateur de saisir une adresse email (via le composant EmailInput) et de changer le thème de l'application. Le design est conçu pour être responsive et s'adapte à la palette de couleurs définie dans l'application.
 */