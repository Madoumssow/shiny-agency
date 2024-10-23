// Importation des bibliothèques et des fichiers nécessaires
import styled from 'styled-components' // Importation de styled-components pour le style des composants
import colors from '../../utils/style/colors' // Importation d'un module de couleurs
import EmptyIllustration from '../../assets/empty.svg' // Importation d'une illustration SVG à afficher

// Création d'un conteneur stylisé pour l'affichage
const Container = styled.div`
  display: flex; // Utilisation de Flexbox pour la mise en page
  flex-direction: column; // Les éléments enfants seront disposés en colonne
  align-items: center; // Centrer les éléments horizontalement
  margin: 60px 90px; // Marge extérieure du conteneur
  padding: 30px; // Espacement interne du conteneur
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark}; // Couleur de fond selon le thème
`

// Création d'un titre principal stylisé
const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
`

// Création d'un sous-titre stylisé
const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
  font-weight: normal; // Poids de la police normal pour le sous-titre
`

// Création d'une image stylisée pour l'illustration
const Illustration = styled.img`
  margin: 30px 0; // Marge en haut et en bas de l'illustration
`

// Définition du composant EmptyList qui prend le thème en prop
function EmptyList({ theme }) {
  // Rendu du composant
  return (
    <Container theme={theme}> {/* Conteneur avec le thème passé en prop */}
      <Title theme={theme}>Dommage...</Title> {/* Titre principal */}
      <Illustration src={EmptyIllustration} /> {/* Affichage de l'illustration */}
      <SubTitle theme={theme}> {/* Sous-titre informatif */}
        Il semblerait que vous n’ayez besoin d’aucune compétence
      </SubTitle>
    </Container>
  )
}

// Exportation du composant pour utilisation dans d'autres fichiers
export default EmptyList
/*****************************************************************************************
 * Explication détaillée du code :
Imports :

styled : Importé depuis styled-components, il permet de créer des composants stylisés.
colors : Importé depuis un fichier de style utilitaire pour utiliser une palette de couleurs définie.
EmptyIllustration : Importation d'une image SVG qui sera utilisée comme illustration dans le composant.
Styled Components :

Container : Un composant div qui sert de conteneur pour tout le contenu. Il utilise Flexbox pour centrer les éléments et s'ajuster selon le thème (clair ou sombre).
Title : Un composant h1 stylisé pour le titre principal, dont la couleur dépend du thème.
SubTitle : Un composant h3 stylisé pour le sous-titre, également dépendant du thème.
Illustration : Un composant img pour afficher l'illustration, avec des marges définies pour espacer l'image.
Composant EmptyList :

Définition : La fonction EmptyList est un composant fonctionnel qui prend une prop theme pour déterminer le style.
Rendu :
Le composant retourne un Container avec le thème passé en prop. À l'intérieur du conteneur :
Un Title qui affiche le texte "Dommage...".
Une Illustration qui utilise l'image SVG importée pour illustrer le contenu.
Un SubTitle qui informe l'utilisateur qu'il n'a pas besoin de compétences.
Exportation :

Le composant EmptyList est exporté pour être utilisé dans d'autres parties de l'application.
Objectif du composant :
Le composant EmptyList est conçu pour être affiché lorsque la liste d'éléments est vide. Il utilise une illustration et un message pour indiquer à l'utilisateur qu'il n'y a pas d'éléments disponibles. Le style s'adapte à différents thèmes (clair et sombre) pour maintenir une interface utilisateur cohérente.
 */