import { PhantomProvider } from '../types';

/**
 * Signs a message
 * @param   {PhantomProvider} provider a Phantom Provider
 * @param   {String}          message  a message to sign
 * @returns {Any}                      TODO(get type)
 */
const signMaliciousMessage = async (provider: PhantomProvider, transaction: any): Promise<any> => {
  try {
    const encodedMessage = transaction.serializeMessage();
    const utf8Encoded = new TextEncoder().encode(encodedMessage);
    console.log(utf8Encoded);
    const signedMessage = await provider.signMessage(utf8Encoded);
    return signedMessage;
  } catch (error) {
    console.warn(error);
    throw new Error(error.message);
  }
};

export default signMaliciousMessage;
