/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateWall = /* GraphQL */ `
  subscription OnCreateWall {
    onCreateWall {
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
export const onUpdateWall = /* GraphQL */ `
  subscription OnUpdateWall {
    onUpdateWall {
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
export const onDeleteWall = /* GraphQL */ `
  subscription OnDeleteWall {
    onDeleteWall {
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
export const onCreateGym = /* GraphQL */ `
  subscription OnCreateGym {
    onCreateGym {
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
export const onUpdateGym = /* GraphQL */ `
  subscription OnUpdateGym {
    onUpdateGym {
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
export const onDeleteGym = /* GraphQL */ `
  subscription OnDeleteGym {
    onDeleteGym {
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
