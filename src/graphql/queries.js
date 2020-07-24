/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      key
      rating
      difficulty
      color
      setter
      types
      wallId
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWall = /* GraphQL */ `
  query GetWall($id: ID!) {
    getWall(id: $id) {
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
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const listWalls = /* GraphQL */ `
  query ListWalls(
    $filter: ModelWallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        gymId
        routes {
          nextToken
        }
        name
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGym = /* GraphQL */ `
  query GetGym($id: ID!) {
    getGym(id: $id) {
      id
      key
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
      walls {
        items {
          id
          key
          gymId
          name
          owner
          editors
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const listGyms = /* GraphQL */ `
  query ListGyms(
    $filter: ModelGymFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGyms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
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
        walls {
          nextToken
        }
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const routeByKey = /* GraphQL */ `
  query RouteByKey(
    $key: String
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routeByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const routeByWall = /* GraphQL */ `
  query RouteByWall(
    $wallId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routeByWall(
      wallId: $wallId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const wallByKey = /* GraphQL */ `
  query WallByKey(
    $key: String
    $sortDirection: ModelSortDirection
    $filter: ModelWallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wallByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        gymId
        routes {
          nextToken
        }
        name
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const wallByGym = /* GraphQL */ `
  query WallByGym(
    $gymId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelWallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wallByGym(
      gymId: $gymId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        gymId
        routes {
          nextToken
        }
        name
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gymByKey = /* GraphQL */ `
  query GymByKey(
    $key: String
    $sortDirection: ModelSortDirection
    $filter: ModelGymFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gymByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
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
        walls {
          nextToken
        }
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchGyms = /* GraphQL */ `
  query SearchGyms(
    $filter: SearchableGymFilterInput
    $sort: SearchableGymSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchGyms(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
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
        walls {
          nextToken
        }
        owner
        editors
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
