export const dataMapper = (offer) => {
  const { buyBCH, city, country, headline, id, margin, pause } = offer;
  return {
    buyBCH,
    closeHours: offer.close_hours,
    currencyType: offer.currency_type,
    currencySymbol: offer.currency_symbol,
    city,
    country,
    createdAt: offer.created_at,
    dynamicPricing: offer.dynamic_pricing,
    headline,
    id,
    limitMax: offer.limit_max,
    limitMin: offer.limit_min,
    makerId: offer.maker_id,
    margin,
    marginAbove: offer.margin_above,
    marketExchange: offer.market_exchange,
    openHours: offer.open_hours,
    pause,
    paymentMethod: offer.payment_method,
    tradeTerms: offer.trade_terms,
    updatedAt: offer.updated_at,
    verifiedOnly: offer.verified_only,
  };
};
