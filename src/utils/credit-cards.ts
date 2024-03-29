// Adapted from https://www.npmjs.com/package/credit-card-type
export type CreditCardBrandId =
  | 'americanExpress'
  | 'dinersClub'
  | 'discover'
  | 'jcb'
  | 'mastercard'
  | 'unionpay'
  | 'visa';

type CreditCardBrandName =
  | 'American Express'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'Mastercard'
  | 'UnionPay'
  | 'Visa';

type CreditCardSecurityCodeLabel = 'CVV' | 'CVC' | 'CID' | 'CVN';
type Range = [number, number];
type CreditCardPattern = number | Range;

export type CreditCardInfo = {
  name: CreditCardBrandName;
  type: CreditCardBrandId;
  patterns: CreditCardPattern[];
  lengths: number[];
  code: {
    size: 3 | 4;
    name: CreditCardSecurityCodeLabel;
  };
  mask: string | string[];
};

// Card types supported by Stripe and therefore need to be supported by FCreditCardInput
// More information on Stripe credit card support :
// https://stripe.com/docs/payments/cards/supported-card-brands
export const cardTypes: CreditCardInfo[] = [
  {
    name: 'Visa',
    type: 'visa',
    patterns: [4],
    lengths: [16],
    code: {
      name: 'CVV',
      size: 3,
    },
    mask: '#### #### #### ####',
  },
  {
    name: 'Mastercard',
    type: 'mastercard',
    patterns: [[51, 55], [22, 26], [270, 271], 2720],
    lengths: [16],
    code: {
      name: 'CVC',
      size: 3,
    },
    mask: '#### #### #### ####',
  },
  {
    name: 'American Express',
    type: 'americanExpress',
    patterns: [34, 37],
    lengths: [15],
    code: {
      name: 'CID',
      size: 4,
    },
    mask: '#### ###### #####',
  },
  {
    name: 'Diners Club',
    type: 'dinersClub',
    patterns: [[300, 305], 36, 38, 39],
    lengths: [14, 16],
    code: {
      name: 'CVV',
      size: 3,
    },
    mask: ['#### ###### ####', '#### #### #### ####'],
  },
  {
    name: 'Discover',
    type: 'discover',
    patterns: [6011, [644, 649], 65],
    lengths: [16],
    code: {
      name: 'CID',
      size: 3,
    },
    mask: '#### #### #### ####',
  },
  {
    name: 'JCB',
    type: 'jcb',
    patterns: [2131, 1800, [3528, 3589]],
    lengths: [16],
    code: {
      name: 'CVV',
      size: 3,
    },
    mask: '#### #### #### ####',
  },
  {
    name: 'UnionPay',
    type: 'unionpay',
    patterns: [
      62,
      620,
      [624, 626],
      [62100, 62182],
      [62184, 62187],
      [62185, 62197],
      [62200, 62205],
      [622010, 622999],
      622018,
      [622019, 622999],
      [62207, 62209],
      [622126, 622925],
      [623, 626],
      6270,
      6272,
      6276,
      [627700, 627779],
      [627781, 627799],
      [6282, 6289],
      6291,
      6292,
      81,
      810,
      [8110, 8131],
      [8132, 8151],
      [8152, 8163],
      [8164, 8171],
    ],
    lengths: [16, 19],
    code: {
      name: 'CVN',
      size: 3,
    },
    mask: ['#### #### #### ####', '#### #### #### #### ###'],
  },
];

/**
 * Checks if a card number matches with a provided pattern.
 * @param cardNumber - The card number to check for a match.
 * @param pattern - The pattern used for comparison.
 */
export function matchCardNumberByPattern(
  cardNumber: string,
  pattern: CreditCardPattern
): boolean {
  if (Array.isArray(pattern)) {
    const [min, max] = pattern;
    const firstDigitsLength = min.toString().length;
    const cardNumberFirstDigitsAsInteger = parseInt(
      cardNumber.substring(0, firstDigitsLength)
    );
    return (
      cardNumberFirstDigitsAsInteger >= min &&
      cardNumberFirstDigitsAsInteger <= max
    );
  }
  const patternString = pattern.toString();
  return (
    patternString.substring(0, cardNumber.length) ===
    cardNumber.substring(0, patternString.length)
  );
}

/**
 * Returns credit card information based on a value that is usually coming from an input.
 * @param value - The input value.
 */
export function getCardInfo(value: string): CreditCardInfo | null {
  if (!value) return null;
  // Filter array of cards types
  const matchedCardTypes = cardTypes.filter(card => {
    // Keep in array only those where at least one pattern matches the current input value
    return card.patterns.some(pattern =>
      matchCardNumberByPattern(value, pattern)
    );
  });

  // If multiple cards match the current value, show the most commonly used credit card
  return matchedCardTypes[0] ?? null;
}

/**
 * Checks if a card number is valid using the Luhn algorithm.
 * @param cardNumber - The card number to check.
 */
export function luhnCheck(cardNumber: string): boolean {
  const cardNumbers = cardNumber
    .split('')
    .map(x => parseInt(x));
  const lastDigit = cardNumbers.pop() ?? 0;

  const sum =
    cardNumbers.reduce(
      (acc, val, i) =>
        i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
      0
    ) + lastDigit;
  return sum % 10 === 0;
}
