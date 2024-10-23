// Importation des hooks et des dépendances nécessaires
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'

// Création d'un conteneur stylisé pour le sondage
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Titre de la question stylisé
const QuestionTitle = styled.h2`
  text-decoration: underline; // Souligner le texte
  text-decoration-color: ${colors.primary}; // Couleur de soulignement
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
`

// Contenu de la question stylisé
const QuestionContent = styled.span`
  margin: 30px; // Marge autour du texte
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
`

// Wrapper pour les liens de navigation stylisé
const LinkWrapper = styled.div`
  padding-top: 30px; // Espace au-dessus des liens
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur des liens selon le thème
  }
  & a:first-of-type {
    margin-right: 20px; // Espace à droite du premier lien
  }
`

// Bouton pour les réponses stylisé
const ReplyBox = styled.button`
  border: none; // Pas de bordure
  height: 100px; // Hauteur du bouton
  width: 300px; // Largeur du bouton
  display: flex; // Utiliser flexbox pour centrer le contenu
  align-items: center; // Centrer verticalement
  justify-content: center; // Centrer horizontalement
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark}; // Couleur de fond selon le thème
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
  border-radius: 30px; // Coins arrondis
  cursor: pointer; // Changer le curseur en pointeur au survol
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'}; // Ombre pour le bouton sélectionné
  &:first-child {
    margin-right: 15px; // Espace à droite du premier bouton
  }
  &:last-of-type {
    margin-left: 15px; // Espace à gauche du dernier bouton
  }
`

// Wrapper pour les boutons de réponse stylisé
const ReplyWrapper = styled.div`
  display: flex; // Utiliser flexbox pour l'alignement horizontal
  flex-direction: row; // Disposer les éléments en ligne
`

// Fonction principale du composant Survey
function Survey() {
  const { questionNumber } = useParams() // Récupération du numéro de la question dans l'URL
  const questionNumberInt = parseInt(questionNumber) // Conversion en entier
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1 // Détermination du numéro de la question précédente
  const nextQuestionNumber = questionNumberInt + 1 // Détermination du numéro de la question suivante
  const { theme } = useTheme() // Récupération du thème actuel

  const { saveAnswers, answers } = useContext(SurveyContext) // Utilisation du contexte pour gérer les réponses

  // Fonction pour enregistrer la réponse sélectionnée
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer }) // Sauvegarde de la réponse dans le contexte
  }
  
  // Récupération des données du sondage via un hook personnalisé
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const surveyData = data?.surveyData // Extraction des données du sondage

  // Gestion des erreurs de chargement
  if (error) {
    return <span>Il y a un problème</span> // Affichage d'un message d'erreur
  }

  return (
    <SurveyContainer>
      <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader data-testid="loader" /> // Affichage d'un loader pendant le chargement
      ) : (
          // Affichage du contenu de la question
        <QuestionContent theme={theme} data-testid="question-content">
          {surveyData && surveyData[questionNumber]} 
        </QuestionContent>
      )}
      <ReplyWrapper>
        {/* Boutons pour répondre à la question */}
        <ReplyBox
          onClick={() => saveReply(true)} // Enregistrement de la réponse 'Oui'
          isSelected={answers[questionNumber] === true} // Vérification si 'Oui' est sélectionné
          theme={theme}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)} // Enregistrement de la réponse 'Non'
          isSelected={answers[questionNumber] === false} // Vérification si 'Non' est sélectionné
          theme={theme}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper theme={theme}>
        {/* Liens de navigation pour les questions précédentes et suivantes */}
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> // Lien vers la question suivante
        ) : (
          <Link to="/results">Résultats</Link> // Lien vers les résultats si aucune question suivante
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey // Exportation du composant Survey
/************************************************************************
 * Explication détaillée du code :
Imports :

Les hooks et composants nécessaires sont importés, notamment useContext, useParams, Link, et styled-components.
Des styles et des composants comme Loader et colors sont importés depuis des chemins définis.
Stylisation :

Des composants stylisés sont créés pour structurer l’interface utilisateur : SurveyContainer, QuestionTitle, QuestionContent, LinkWrapper, ReplyBox, et ReplyWrapper. Chaque composant a des styles conditionnels basés sur le thème (clair ou sombre).
Composant Survey :

Récupération des paramètres : Le numéro de question est récupéré depuis l'URL via useParams.
Calcul des numéros de questions : Les numéros de questions précédentes et suivantes sont déterminés pour permettre la navigation.
Thème : Le thème actuel est récupéré avec le hook useTheme.
Contexte des réponses : Le contexte SurveyContext est utilisé pour sauvegarder et récupérer les réponses du sondage.
Fonction saveReply :

Cette fonction enregistre la réponse sélectionnée par l'utilisateur dans le contexte.
Récupération des données du sondage :

Les données sont récupérées depuis une API avec le hook useFetch. Les données du sondage sont extraites de la réponse.
Gestion des erreurs :

Si une erreur se produit lors du chargement des données, un message d'erreur est affiché.
Rendu du composant :

Le composant renvoie le conteneur du sondage contenant :
Le titre de la question.
Un loader si les données sont en cours de chargement.
Le contenu de la question une fois les données chargées.
Deux boutons pour répondre (Oui / Non) qui appellent la fonction saveReply en fonction de la sélection de l'utilisateur.
Des liens pour naviguer vers la question précédente ou suivante. Si aucune question suivante n'est disponible, un lien vers les résultats est affiché.
Objectif du composant :
Le composant Survey est conçu pour afficher une série de questions de sondage à l'utilisateur, lui permettant de répondre par "Oui" ou "Non" et de naviguer entre les questions. Les réponses sont sauvegardées dans un contexte pour un traitement ultérieur, comme l'affichage des résultats à la fin du sondage.
 */