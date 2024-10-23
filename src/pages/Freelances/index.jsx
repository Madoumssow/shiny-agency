// Importation du composant `Card` pour afficher les cartes des freelances
import Card from '../../components/Card'

// Importation de `styled-components` pour créer des composants stylisés
import styled from 'styled-components'

// Importation des couleurs définies dans le fichier `colors.js`
import colors from '../../utils/style/colors'

// Importation du composant `Loader` pour afficher une animation de chargement
import { Loader } from '../../utils/style/Atoms'

// Importation des hooks personnalisés : `useFetch` pour la récupération des données et `useTheme` pour le thème (clair/sombre)
import { useFetch, useTheme } from '../../utils/hooks'

// Création d'un conteneur de cartes avec une grille CSS pour l'affichage des profils de freelances
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

// Composant stylisé pour le titre principal de la page
// La couleur du texte varie selon le thème (clair ou sombre)
const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

// Composant stylisé pour le sous-titre de la page
// La couleur du texte varie selon le thème et utilise une couleur secondaire définie dans le fichier `colors.js`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

// Composant stylisé pour l'animation de chargement, centré horizontalement
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// Composant principal `Freelances` qui affiche la page de recherche des freelances
function Freelances() {
  // Récupération du thème actuel (clair ou sombre) via le hook `useTheme`
  const { theme } = useTheme()

  // Récupération des données des freelances via le hook personnalisé `useFetch`
  // L'URL de l'API est passée en paramètre pour récupérer la liste des freelances
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  // Extraction de la liste des freelances depuis les données récupérées
  const freelancersList = data?.freelancersList

  // En cas d'erreur lors de la récupération des données, on affiche un message d'erreur
  if (error) {
    return <span>Il y a un problème</span>
  }

  // Rendu du composant :
  // Si les données sont en cours de chargement, on affiche un loader (animation de chargement)
  // Sinon, on affiche les cartes des freelances
  return (
    <div>
      {/* Titre de la page, dont la couleur s'adapte au thème actuel */}
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>

      {/* Sous-titre de la page */}
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>

      {/* Si les données sont en cours de chargement, on affiche un loader */}
      {isLoading ? (
        <LoaderWrapper>
          {/* Loader avec le thème courant */}
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        // Sinon, on affiche les cartes des freelances dans une grille
        <CardsContainer>
          {/* On mappe la liste des freelances et on crée une carte pour chaque freelance */}
          {freelancersList?.map((profile, index) => (
            <Card
              // Utilisation d'une clé unique pour chaque carte
              key={`${profile.name}-${index}`}
              // Propriétés passées au composant Card : métier, nom, photo et thème
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              theme={theme}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

// Exportation du composant `Freelances` pour pouvoir l'utiliser ailleurs dans l'application
export default Freelances
/******************************************************************************************
 * 
 * Explication détaillée :
useTheme :

Ce hook personnalisé permet d'accéder au thème actuel (clair ou sombre) et de l'utiliser pour adapter les styles de la page. Par exemple, la couleur du texte change en fonction du thème sélectionné.
useFetch :

Ce hook est utilisé pour récupérer des données depuis l'API. Ici, il fait un appel à l'URL http://localhost:8000/freelances pour obtenir une liste de freelances.
Il renvoie trois valeurs importantes :
isLoading : Vrai tant que les données sont en cours de chargement.
data : Les données récupérées (ici la liste des freelances).
error : Si une erreur survient pendant la récupération des données.
Composants stylisés (styled-components) :

Les composants comme PageTitle, PageSubtitle, et LoaderWrapper sont créés avec styled-components pour ajouter du style tout en conservant la logique des composants React.
L'utilisation du thème (clair ou sombre) est intégrée dans ces composants à l'aide des propriétés dynamiques (ex : color: ${({ theme }) => ...}).
Rendu conditionnel :

En fonction de l'état de chargement ou d'erreur :
Si les données sont en cours de chargement, un loader est affiché.
Si une erreur survient, un message d'erreur s'affiche.
Si les données sont chargées correctement, une grille de cartes contenant les profils des freelances est affichée.
Conclusion :
Ce composant affiche une page permettant aux utilisateurs de trouver des freelances. Il utilise les hooks personnalisés pour gérer le thème et la récupération des données, et des composants stylisés pour un rendu visuel propre et réactif.
 */