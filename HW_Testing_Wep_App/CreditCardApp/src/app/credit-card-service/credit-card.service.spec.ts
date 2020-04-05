import { TestBed, inject } from '@angular/core/testing';
import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;
  const cards = [
    { card: 'JCB', number: '3530111333300000' },
    { card: 'MasterCard', number: '5500000000000004' },
    { card: 'DinersClub', number: '38520000023237' },
    { card: 'CarteBlanche', number: '30000000000004' },
    { card: 'AmEx', number: '340000000000009' },
    { card: 'Discover', number: '6011000000000004' },
    { card: 'enRoute', number: '201400000000009' },
    { card: 'Solo', number: '6334000000000004' },
    { card: 'Switch', number: '4903010000000009' },
    { card: 'Maestro', number: '6304100000000008' },
    { card: 'LaserCard', number: '6304100000000008' }
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [CreditCardService] });
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', () => {
    expect(service).toBeTruthy();
  });

  it(`should have valid fromat(for all type of cards)'`, () => {
    cards.forEach(card => {
      expect(service.testCreditCard(card.number, card.card)).toEqual({isValid: true, message: 'Credit card has a valid format'});
    });
  });

  it(`should show error messagae(Card number have invalid format)'`, () => {
    cards.forEach(card => {
      expect(service.testCreditCard('0-03[//-or3lff,v/\'/+/3[c\-8!@#%^&*()+_)(*&^%$#@!)];,/cfrwe1234d', card.card))
      .toEqual({isValid: false, message: 'Credit card number is in invalid format'});
    });
  });

  it(`check invalid format type`, () => {
    expect(service.testCreditCard('4111111111111111', 'ANB'))
    .toEqual({isValid: false, message: 'Unknown card type'});
  });

  it('show "Credit card number has an inappropriate number of digits"', async () => {
    expect(service.testCreditCard('35301113333000001', 'JCB')).toEqual({
      isValid: false,
      message: 'Credit card number has an inappropriate number of digits'
    });
  });

  it(`should show error messagae(Warning! This credit card number is associated with a scam attempt)'`, () => {
      expect(service.testCreditCard('5490 9977 7109 2064', 'DinersClub'));
  });

  it('show error "Unknown card type"', async () => {
    expect(service.testCreditCard('	3852 0000 0232 37', '')).toEqual({
      isValid: false,
      message: 'Unknown card type'
    });
  });

});
