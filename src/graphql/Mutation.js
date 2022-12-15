import { gql } from '@apollo/client'

export const CREATE_MOVIE = gql`
  mutation createMovie(
    $title: String!
    $description: String!
    $date: String!
    $image: String!
  ) {
    createNote(
      input: { title: $title, description: $description, date: $date, image: $image }
    ) {
      _id
      title
      description
      date
      image
    }
  }
`
