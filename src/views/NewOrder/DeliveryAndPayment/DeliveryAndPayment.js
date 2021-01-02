import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { RadioGroup } from "@components/molecules";
import { Input, Checkbox } from "@components/atoms";
import { secondary } from "@constants/kinds";
import { useFontSize } from "@hooks/styled-components";
import { payment, shipment } from "../dummyContent/dummyContent";

const StyledWrapper = styled.div``;

const StyledRadioGroup = styled(RadioGroup)`
  margin-bottom: 60px;
`;

const StyledInput = styled(Input).attrs(() => ({
  kind: secondary,
}))`
  width: 470px;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledCheckboxHeadline = styled.span`
  ${({ theme }) => useFontSize(theme)}
  display: block;
  margin-bottom: 15px;
  margin-top: 25px;

  :first-of-type {
    margin-top: 40px;
  }
`;

const StyledCheckbox = styled(Checkbox).attrs(() => ({
  kind: secondary,
}))`
  margin-bottom: ${({ $last, $withoutMargin }) =>
    $last ? `60px` : $withoutMargin ? 0 : `15px`};

  label {
    font-weight: ${({ $bold }) => ($bold ? 400 : 300)};
  }
`;

const DeliveryAndPayment = ({ Headline, SecondHeadline }) => {
  return (
    <StyledWrapper>
      <Headline>Dostawa i płatność</Headline>

      <SecondHeadline>1. Sposób dostawy</SecondHeadline>
      <StyledRadioGroup name={shipment.name} items={shipment.items} />

      <SecondHeadline>2. Metody płatności</SecondHeadline>
      <StyledRadioGroup name={payment.name} items={payment.items} />

      <SecondHeadline>3. Dane odbiorcy</SecondHeadline>
      <StyledInput name="name" label="Imię i nazwisko lub nazwa firmy" />
      <StyledInput name="street" label="Ulica i numer" />
      <StyledInput name="postcode" label="Kod pocztowy" />
      <StyledInput name="city" label="Miejscowość" />
      <StyledInput name="email" label="E-mail" />
      <StyledInput name="phone" label="Telefon" />

      <StyledCheckboxHeadline>Dane do faktury</StyledCheckboxHeadline>
      <StyledCheckbox
        name="invoiceDetails"
        label="Chcę dodać inne dane lub potrzebuję faktury na firmę"
        $withoutMargin
      />

      <StyledCheckboxHeadline>Komentarz do zamówienia</StyledCheckboxHeadline>
      <StyledCheckbox name="comment" label="Komentarz do zamówienia" $last />

      <SecondHeadline>Zgody formalne</SecondHeadline>
      <StyledCheckbox name="checkall" label="Zaznacz wszystkie" $bold />
      <StyledCheckbox
        name="shareOpinion"
        label="Chcę podzielić się opinią o satysfakcji z zakupów Więcej"
      />
      <StyledCheckbox
        name="emailInvoice"
        label="Wyrażam zgodę na wystawienie i przesłanie faktury w formie elektronicznej"
      />
    </StyledWrapper>
  );
};

DeliveryAndPayment.propTypes = {
  Headline: PropTypes.object.isRequired,
  SecondHeadline: PropTypes.object.isRequired,
};

export default DeliveryAndPayment;