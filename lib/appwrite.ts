import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'


export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.leotech.aora',
  projectId: '66691ac200226120ada9',
  databaseId: '666922ca0007e803d2d6',
  userCollectionId: '6669232000121bee02c0',
  videoCollectionId: '6669236c0026dce3bf81',
  storageId: '666927160012579ae134'
}


const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)
  ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, username: string) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accoundId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser

  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}



export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    console.log(session)
    return session;
  } catch (error) {
    throw new Error(String(error))
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accoundId', currentAccount.$id)]
    )
    if (!currentAccount) throw Error;

    return currentUser.documents[0]
  } catch (error) {
    throw new Error(String(error))
  }
}
