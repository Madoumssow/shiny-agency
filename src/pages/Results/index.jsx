import { useContext } from 'react'
import styled from 'styled-components'
import { SurveyContext } from '../../utils/context'
import EmptyList from '../../components/EmptyList'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  } else {
    return `${title},`
  }
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const queryParams = formatQueryParams(answers)

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  )

  if (error) {
    return <span>Il y a un problème</span>
  }

  const resultsData = data?.resultsData

  if (resultsData?.length < 1) {
    return <EmptyList theme={theme} />
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader data-testid="loader" />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme} data-testid="job-title">
                {result.title}
              </JobTitle>
              <p data-testid="job-description">{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
/* 
  // Importation des hooks React nécessaires
import { useContext } from 'react'

// Importation de styled-components pour le style
import styled from 'styled-components'

// Importation du contexte de l'enquête
import { SurveyContext } from '../../utils/context'

// Importation d'un composant pour afficher un message lorsque la liste est vide
import EmptyList from '../../components/EmptyList'

// Importation des couleurs définies dans le projet
import colors from '../../utils/style/colors'

// Importation de hooks personnalisés pour la récupération de données et le thème
import { useFetch, useTheme } from '../../utils/hooks'

/ Importation de composants stylisés (un lien et un loader)
import { StyledLink, Loader } from '../../utils/style/Atoms'
/*
// Définition d'un conteneur pour les résultats, avec des styles basés sur le thème
const ResultsContainer = styled.div`
  display: flex; /* Utilisation d'un flexbox pour la mise en page */
//   flex-direction: column; /* Orientation verticale des enfants */
//   align-items: center; /* Alignement des enfants au centre */
//   margin: 60px 90px; /* Marges externes */
//   padding: 30px; /* Espacement interne */
//   background-color: ${({ theme }) =>
//     theme === 'light' ? colors.backgroundLight : colors.backgroundDark}; /* Couleur de fond en fonction du thème */
// `

// // Définition d'un titre pour les résultats avec des styles spécifiques
// const ResultsTitle = styled.h2`
//   color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; /* Couleur du texte en fonction du thème */
//   font-weight: bold; /* Gras */
//   font-size: 28px; /* Taille de la police */
//   max-width: 60%; /* Largeur maximale */
//   text-align: center; /* Alignement centré */
//   & > span {
//     padding-left: 10px; /* Espacement à gauche pour les span enfants */
//   }
// `

// // Wrapper pour la description des résultats
// const DescriptionWrapper = styled.div`
//   padding: 60px; /* Espacement interne */
// `

// // Style pour le titre de l'emploi
// const JobTitle = styled.span`
//   color: ${({ theme }) =>
//     theme === 'light' ? colors.primary : colors.backgroundLight}; /* Couleur du texte en fonction du thème */
//   text-transform: capitalize; /* Mise en majuscule de la première lettre */
// `

// // Style pour la description du travail
// const JobDescription = styled.div`
//   font-size: 18px; /* Taille de la police */
//   & > p {
//     color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')}; /* Couleur du texte en fonction du thème */
//     margin-block-start: 5px; /* Espacement au-dessus des paragraphes */
//   }
//   & > span {
//     font-size: 20px; /* Taille de la police pour les span enfants */
//   }
// `

// // Wrapper pour le loader
// const LoaderWrapper = styled.div`
//   display: flex; /* Utilisation d'un flexbox */
//   justify-content: center; /* Alignement centré */
// `

// // Fonction pour formater les paramètres de requête à partir des réponses
// export function formatQueryParams(answers) {
//   const answerNumbers = Object.keys(answers) // Récupération des clés (numéros de réponses)

//   return answerNumbers.reduce((previousParams, answerNumber, index) => {
//     const isFirstParam = index === 0 // Vérification si c'est le premier paramètre
//     const separator = isFirstParam ? '' : '&' // Définition du séparateur
//     return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}` // Construction de la chaîne de paramètres
//   }, '')
// }

// // Fonction pour formater la liste des emplois
// export function formatJobList(title, listLength, index) {
//   if (index === listLength - 1) { // Si c'est le dernier élément
//     return title // Retourne simplement le titre
//   } else {
//     return `${title},` // Sinon, ajoute une virgule
//   }
// }

// // Définition du composant principal
// function Results() {
//   const { theme } = useTheme() // Récupération du thème actuel
//   const { answers } = useContext(SurveyContext) // Récupération des réponses du contexte
//   const queryParams = formatQueryParams(answers) // Formatage des réponses en paramètres de requête

//   // Appel à l'API pour récupérer les résultats
//   const { data, isLoading, error } = useFetch(
//     `http://localhost:8000/results?${queryParams}` // URL avec paramètres
//   )

//   if (error) { // En cas d'erreur
//     return <span>Il y a un problème</span> // Afficher un message d'erreur
//   }

//   const resultsData = data?.resultsData // Extraction des données des résultats

//   if (resultsData?.length < 1) { // Si aucune donnée n'est disponible
//     return <EmptyList theme={theme} /> // Afficher un message de liste vide
//   }

//   return isLoading ? ( // Si les données sont en cours de chargement
//     <LoaderWrapper>
//       <Loader data-testid="loader" /> // Afficher le loader
//     </LoaderWrapper>
//   ) : ( // Sinon, afficher les résultats
//     <ResultsContainer theme={theme}>
//       <ResultsTitle theme={theme}>
//         Les compétences dont vous avez besoin :
//         {resultsData &&
//           resultsData.map((result, index) => ( // Boucle sur les résultats
//             <JobTitle
//               key={`result-title-${index}-${result.title}`} // Clé unique pour chaque élément
//               theme={theme}
//             >
//               {formatJobList(result.title, resultsData.length, index)} // Afficher le titre formaté
//             </JobTitle>
//           ))}
//       </ResultsTitle>
//       <StyledLink $isFullLink to="/freelances"> {/* Lien vers les profils de freelances */}
//         Découvrez nos profils
//       </StyledLink>
//       <DescriptionWrapper>
//         {resultsData &&
//           resultsData.map((result, index) => ( // Boucle sur les détails des résultats
//             <JobDescription
//               theme={theme}
//               key={`result-detail-${index}-${result.title}` // Clé unique pour chaque détail
//             >
//               <JobTitle theme={theme} data-testid="job-title"> {/* Titre de l'emploi */}
//                 {result.title}
//               </JobTitle>
//               <p data-testid="job-description">{result.description}</p> {/* Description de l'emploi */}
//             </JobDescription>
//           ))}
//       </DescriptionWrapper>
//     </ResultsContainer>
//   )
// }

// // Exportation du composant
// export default Results

/*****************************************************************************************
 * Explication détaillée du code :
Imports :

Les hooks React et styled-components sont utilisés pour créer un composant fonctionnel stylisé.
Le SurveyContext permet de partager les réponses de l'utilisateur à travers l'application.
Les utilitaires comme useFetch et useTheme sont utilisés pour gérer la récupération des données et l'accès au thème.
Les composants comme EmptyList, StyledLink et Loader sont importés pour gérer l'affichage de différents états de l'interface utilisateur.
Styles :

Les styles sont créés à l'aide de styled-components, permettant une gestion des styles basée sur les props (comme le thème) pour une meilleure flexibilité.
Fonctionnalité :

Le composant Results utilise les réponses de l'utilisateur pour faire une requête à une API et obtenir des résultats pertinents.
Les résultats sont affichés dans un conteneur avec un titre et une liste de descriptions.
Les fonctions formatQueryParams et formatJobList sont utilisées pour structurer les paramètres d'URL et le formatage des titres des emplois.
État de chargement et erreurs :

Le composant gère les états de chargement et d'erreur, affichant un loader pendant la récupération des données et un message d'erreur en cas de problème.
Affichage conditionnel :

Si les résultats sont vides, un composant EmptyList est rendu. Si les données sont toujours en cours de chargement, un loader est affiché. Sinon, les résultats sont affichés.
Mapping des données :

Les résultats sont itérés et affichés avec un style approprié, permettant à l'utilisateur de voir les compétences nécessaires et d'explorer davantage de profils de freelances.
Objectif du composant :
Le composant Results a pour but de récupérer les résultats d'une enquête, d'afficher les compétences nécessaires à l'utilisateur, et de lui permettre d'explorer des profils de freelances basés sur ces compétences. Il gère l'affichage dynamique des états de l'application (chargement, erreur, contenu vide, etc.) pour offrir une expérience utilisateur fluide et intuitive.
 */