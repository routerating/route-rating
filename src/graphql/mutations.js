/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      key
      email
      givenName
      familyName
      address1
      address2
      city
      state
      zip
      phone
      type
      profile
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      key
      email
      givenName
      familyName
      address1
      address2
      city
      state
      zip
      phone
      type
      profile
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      key
      email
      givenName
      familyName
      address1
      address2
      city
      state
      zip
      phone
      type
      profile
      createdAt
      updatedAt
    }
  }
`;
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      createdAt
      updatedAt
    }
  }
`;
export const createWall = /* GraphQL */ `
  mutation CreateWall(
    $input: CreateWallInput!
    $condition: ModelWallConditionInput
  ) {
    createWall(input: $input, condition: $condition) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateWall = /* GraphQL */ `
  mutation UpdateWall(
    $input: UpdateWallInput!
    $condition: ModelWallConditionInput
  ) {
    updateWall(input: $input, condition: $condition) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteWall = /* GraphQL */ `
  mutation DeleteWall(
    $input: DeleteWallInput!
    $condition: ModelWallConditionInput
  ) {
    deleteWall(input: $input, condition: $condition) {
      id
      key
      gymId
      routes {
        items {
          id
          key
          rating
          difficulty
          color
          setter
          types
          wallId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const createGym = /* GraphQL */ `
  mutation CreateGym(
    $input: CreateGymInput!
    $condition: ModelGymConditionInput
  ) {
    createGym(input: $input, condition: $condition) {
      id
      key
      ownerId
      owner {
        id
        key
        email
        givenName
        familyName
        address1
        address2
        city
        state
        zip
        phone
        type
        profile
        createdAt
        updatedAt
      }
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      editorIds
      walls {
        items {
          id
          key
          gymId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGym = /* GraphQL */ `
  mutation UpdateGym(
    $input: UpdateGymInput!
    $condition: ModelGymConditionInput
  ) {
    updateGym(input: $input, condition: $condition) {
      id
      key
      ownerId
      owner {
        id
        key
        email
        givenName
        familyName
        address1
        address2
        city
        state
        zip
        phone
        type
        profile
        createdAt
        updatedAt
      }
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      editorIds
      walls {
        items {
          id
          key
          gymId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGym = /* GraphQL */ `
  mutation DeleteGym(
    $input: DeleteGymInput!
    $condition: ModelGymConditionInput
  ) {
    deleteGym(input: $input, condition: $condition) {
      id
      key
      ownerId
      owner {
        id
        key
        email
        givenName
        familyName
        address1
        address2
        city
        state
        zip
        phone
        type
        profile
        createdAt
        updatedAt
      }
      name
      address1
      address2
      city
      state
      zip
      phone
      website
      logo
      email
      editorIds
      walls {
        items {
          id
          key
          gymId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
