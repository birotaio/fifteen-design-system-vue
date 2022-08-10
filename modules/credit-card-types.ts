// Adapted from https://www.npmjs.com/package/credit-card-type

export declare type CreditCardBrandId =
  | 'american-express'
  | 'diners-club'
  | 'discover'
  | 'jcb'
  | 'mastercard'
  | 'unionpay'
  | 'visa';
declare type CreditCardBrandName =
  | 'American Express'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'Mastercard'
  | 'UnionPay'
  | 'Visa';
declare type CreditCardSecurityCodeLabel = 'CVV' | 'CVC' | 'CID' | 'CVN';
declare type Range = [number, number];
declare type CreditCardPattern = number | Range;
export declare type CreditCardInformation = {
  niceType: CreditCardBrandName;
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
const cardTypes: CreditCardInformation[] = [
  {
    niceType: 'Visa',
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
    niceType: 'Mastercard',
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
    niceType: 'American Express',
    type: 'american-express',
    patterns: [34, 37],
    lengths: [15],
    code: {
      name: 'CID',
      size: 4,
    },
    mask: '#### ###### #####',
  },
  {
    niceType: 'Diners Club',
    type: 'diners-club',
    patterns: [[300, 305], 36, 38, 39],
    lengths: [14, 16],
    code: {
      name: 'CVV',
      size: 3,
    },
    mask: ['#### ###### ####', '#### #### #### ####'],
  },
  {
    niceType: 'Discover',
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
    niceType: 'JCB',
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
    niceType: 'UnionPay',
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

function matches(value: string, pattern: CreditCardPattern): boolean {
  if (Array.isArray(pattern)) {
    const [min, max] = pattern;
    const digitsLength = min.toString().length;
    const valueAsInteger = parseInt(value.substring(0, digitsLength));
    return valueAsInteger >= min && valueAsInteger <= max;
  } else {
    const patternString = pattern.toString();
    return (
      patternString.substring(0, value.length) ===
      value.substring(0, patternString.length)
    );
  }
}

function getCardInformation(value: string): CreditCardInformation | null {
  if (!value) return null;
  // Filter array of cards types
  const cardTypeArray = cardTypes.filter(card => {
    // Keep in array only those where at least one pattern match the current input value
    return card.patterns.some(pattern => matches(value, pattern));
  });

  // If multiple cards match the current value, show the most commonly used credit card
  return cardTypeArray[0] ?? null;
}

export { cardTypes, getCardInformation };
