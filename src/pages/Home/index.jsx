// Importation de styled-components pour créer des composants stylisés
import styled from 'styled-components'

// Importation des couleurs définies dans un fichier de styles
import colors from '../../utils/style/colors'

// Importation d'un lien stylisé qui sera utilisé dans le composant
import { StyledLink } from '../../utils/style/Atoms'

// Importation d'un hook personnalisé pour accéder au thème actuel
import { useTheme } from '../../utils/hooks'

// Importation d'une illustration pour la page d'accueil
import HomeIllustration from '../../assets/home-illustration.svg'

// Création d'un wrapper pour le composant principal de la page d'accueil
const HomeWrapper = styled.div`
  display: flex; // Utilisation de flexbox pour centrer le contenu
  justify-content: center; // Centre le contenu horizontalement
`

// Création d'un conteneur principal pour le contenu de la page d'accueil
const HomerContainer = styled.div`
  margin: 30px; // Marge autour du conteneur
  background-color: ${({ theme }) => // Changement de la couleur d'arrière-plan en fonction du thème
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px; // Espacement interne
  display: flex; // Utilisation de flexbox pour organiser le contenu
  flex-direction: row; // Organisation du contenu en rangée
  max-width: 1200px; // Largeur maximale du conteneur
`

// Création d'une colonne à gauche pour le texte et le lien
const LeftCol = styled.div`
  display: flex; // Utilisation de flexbox pour organiser le contenu
  flex-direction: column; // Organisation du contenu en colonne
  justify-content: center; // Centre le contenu verticalement
  flex: 1; // Permet à cette colonne de prendre de l'espace disponible
  ${StyledLink} {
    max-width: 250px; // Largeur maximale pour le lien stylisé
  }
`

// Création d'un titre stylisé
const StyledTitle = styled.h2`
  padding-bottom: 30px; // Espacement en bas
  max-width: 280px; // Largeur maximale du titre
  line-height: 50px; // Hauteur de ligne pour le texte
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte en fonction du thème
`

// Création d'un composant pour l'illustration
const Illustration = styled.img`
  flex: 1; // Permet à l'image de prendre de l'espace disponible
`

// Fonction principale du composant Home
function Home() {
  const { theme } = useTheme() // Récupération du thème actuel à l'aide du hook personnalisé

  return (
    <HomeWrapper>
      <HomerContainer theme={theme}> {/* Passation du thème au conteneur principal */}
        <LeftCol>
          <StyledTitle theme={theme}> {/* Passation du thème au titre */}
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink> {/* Lien vers le test */}
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} /> {/* Affichage de l'illustration */}
      </HomerContainer>
    </HomeWrapper>
  )
}

// Exportation du composant Home pour l'utiliser dans d'autres parties de l'application
export default Home

/*****************************************************************************************
 * 
 * Explication détaillée du code :
Imports :

styled-components : Bibliothèque utilisée pour créer des composants avec des styles en CSS.
colors : Module qui contient les couleurs utilisées dans l'application, permettant une gestion centralisée des couleurs.
StyledLink : Un lien stylisé qui est défini dans un autre fichier pour respecter la cohérence du style.
useTheme : Un hook personnalisé permettant d'accéder au thème actuel (clair ou sombre).
HomeIllustration : L'illustration importée qui sera affichée sur la page d'accueil.
Styled Components :

HomeWrapper : Un conteneur principal pour centrer tout le contenu de la page d'accueil.
HomerContainer : Un conteneur flex qui s'ajuste en fonction du thème, avec des marges et un espacement interne définis. Il limite également la largeur maximale à 1200 pixels.
LeftCol : Une colonne flex qui contient le texte et le lien, centrée verticalement.
StyledTitle : Un titre stylisé avec des propriétés de style comme l'espacement et la couleur, qui varie selon le thème.
Illustration : Un composant pour afficher l'illustration avec un espace flexible.
Fonction Home :

Récupération du thème : Utilisation du hook useTheme pour obtenir le thème actuel (clair ou sombre).
Rendu du contenu : Le contenu est structuré en un wrapper et un conteneur flex. À l'intérieur, il y a :
Un titre décrivant le service offert par l'application.
Un lien vers une page de test ("/survey/1").
L'illustration qui complète la présentation.
Objectif du composant :
Le composant Home est conçu pour fournir une introduction visuelle et textuelle à l'application. Il invite les utilisateurs à identifier leurs besoins et les dirige vers un test, le tout en s'adaptant à l'apparence claire ou sombre en fonction des préférences de l'utilisateur.
 */