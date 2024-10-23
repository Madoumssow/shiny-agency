// Importation des bibliothèques et des fichiers nécessaires
import styled from 'styled-components' // Importation de styled-components pour le style des composants
import colors from '../../utils/style/colors' // Importation d'un module de couleurs
import { useTheme } from '../../utils/hooks' // Importation d'un hook pour obtenir le thème actuel
import ErrorIllustration from '../../assets/404.svg' // Importation d'une illustration SVG pour représenter une erreur

// Création d'un wrapper stylisé pour le composant d'erreur
const ErrorWrapper = styled.div`
  margin: 30px; // Marge autour du wrapper
  display: flex; // Utilisation de Flexbox pour la mise en page
  flex-direction: column; // Les éléments enfants seront disposés en colonne
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark}; // Couleur de fond selon le thème
  align-items: center; // Centrer les éléments horizontalement
`

// Création d'un titre d'erreur stylisé
const ErrorTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
  font-weight: 300; // Poids de la police léger
`

// Création d'un sous-titre d'erreur stylisé
const ErrorSubtitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')}; // Couleur du texte selon le thème
  font-weight: 300; // Poids de la police léger
`

// Création d'une image stylisée pour l'illustration d'erreur
const Illustration = styled.img`
  max-width: 800px; // Largeur maximale de l'illustration
`

// Définition du composant Error
function Error() {
  const { theme } = useTheme() // Utilisation du hook useTheme pour obtenir le thème actuel

  // Rendu du composant
  return (
    <ErrorWrapper theme={theme}> {/* Wrapper avec le thème passé en prop */}
      <ErrorTitle theme={theme}>Oups...</ErrorTitle> {/* Titre d'erreur */}
      <Illustration src={ErrorIllustration} /> {/* Affichage de l'illustration d'erreur */}
      <ErrorSubtitle theme={theme}> {/* Sous-titre informatif */}
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

// Exportation du composant pour utilisation dans d'autres fichiers
export default Error
/**********************************************************************************************
 * Explication détaillée du code :
Imports :

styled : Importé depuis styled-components, il permet de créer des composants stylisés en utilisant des styles CSS.
colors : Importé depuis un fichier de style utilitaire pour utiliser une palette de couleurs définie dans l'application.
useTheme : Un hook personnalisé qui permet d'accéder au thème actuel (clair ou sombre) de l'application.
ErrorIllustration : Importation d'une image SVG qui sera utilisée comme illustration pour représenter l'erreur (dans ce cas, une page 404).
Styled Components :

ErrorWrapper : Un composant div qui sert de conteneur pour tout le contenu d'erreur. Il utilise Flexbox pour centrer les éléments et s'ajuster selon le thème (clair ou sombre).
ErrorTitle : Un composant h1 stylisé pour le titre principal de l'erreur, dont la couleur dépend du thème. Son poids de police est léger.
ErrorSubtitle : Un composant h2 stylisé pour le sous-titre de l'erreur, également dépendant du thème, avec un poids de police léger.
Illustration : Un composant img pour afficher l'illustration d'erreur, avec une largeur maximale définie pour assurer qu'elle ne dépasse pas une certaine taille.
Composant Error :

Définition : La fonction Error est un composant fonctionnel qui utilise le hook useTheme pour déterminer le style à appliquer.
Rendu :
Le composant retourne un ErrorWrapper avec le thème passé en prop. À l'intérieur du conteneur :
Un ErrorTitle qui affiche le texte "Oups...", indiquant une erreur.
Une Illustration qui utilise l'image SVG importée pour illustrer l'erreur.
Un ErrorSubtitle qui informe l'utilisateur que la page demandée n'existe pas.
Exportation :

Le composant Error est exporté pour être utilisé dans d'autres parties de l'application, notamment pour gérer les pages d'erreur (comme une page 404).
Objectif du composant :
Le composant Error est conçu pour être affiché lorsqu'une erreur survient, comme lorsqu'une page n'est pas trouvée. Il fournit une interface utilisateur simple et informative, avec un message et une illustration pour indiquer l'erreur à l'utilisateur. Le style du composant s'adapte en fonction du thème de l'application pour maintenir une cohérence visuelle.
 */