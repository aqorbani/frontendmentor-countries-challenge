const e2p = (s: string) =>
  s.toString().replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s: string) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

const sp = (number: string) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (!seperatedNumber) {
    return;
  }
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

const sp_latin = (number: string) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (!seperatedNumber) {
    return;
  }
  const joinedNumber = seperatedNumber.join(",");
  return joinedNumber;
};

export { e2p, p2e, sp, sp_latin };
