import { Response } from "express";
import { CustomResponse } from "../types.core";

export default class Responder {
  static Continue(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 100;
    return props.res.status(100).json(props.payload);
  }
  static r100(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 100;
    return props.res.status(100).json(props.payload);
  }
  static SwitchProtocols(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 101;
    return props.res.status(101).json(props.payload);
  }
  static r101(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 101;
    return props.res.status(101).json(props.payload);
  }
  static Processing(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 102;
    return props.res.status(102).json(props.payload);
  }
  static r102(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 102;
    return props.res.status(102).json(props.payload);
  }
  static Ok(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 200;
    return props.res.status(200).json(props.payload);
  }
  static r200(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 200;
    return props.res.status(200).json(props.payload);
  }
  static Created(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 201;
    return props.res.status(201).json(props.payload);
  }
  static r201(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 201;
    return props.res.status(201).json(props.payload);
  }
  static Accepted(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 202;
    return props.res.status(202).json(props.payload);
  }
  static r202(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 202;
    return props.res.status(202).json(props.payload);
  }
  static NonAuthorativeInformation(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 203;
    return props.res.status(203).json(props.payload);
  }
  static r203(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 203;
    return props.res.status(203).json(props.payload);
  }
  static NoContent(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 204;
    return props.res.status(204).json(props.payload);
  }
  static r204(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 204;
    return props.res.status(204).json(props.payload);
  }
  static ResetContent(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 205;
    return props.res.status(205).json(props.payload);
  }
  static r205(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 205;
    return props.res.status(205).json(props.payload);
  }
  static PartialContent(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 206;
    return props.res.status(206).json(props.payload);
  }
  static r206(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 206;
    return props.res.status(206).json(props.payload);
  }
  static MultiStatus(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 207;
    return props.res.status(207).json(props.payload);
  }
  static r207(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 207;
    return props.res.status(207).json(props.payload);
  }
  static AlreadyReported(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 208;
    return props.res.status(208).json(props.payload);
  }
  static r208(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 208;
    return props.res.status(208).json(props.payload);
  }
  static IMUsed(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 226;
    return props.res.status(226).json(props.payload);
  }
  static r226(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 226;
    return props.res.status(226).json(props.payload);
  }
  static MultipleChoices(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 300;
    return props.res.status(300).json(props.payload);
  }
  static r300(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 300;
    return props.res.status(300).json(props.payload);
  }
  static MovedPermanently(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 301;
    return props.res.status(301).json(props.payload);
  }
  static r301(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 301;
    return props.res.status(301).json(props.payload);
  }
  static Found(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 302;
    return props.res.status(302).json(props.payload);
  }
  static r302(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 302;
    return props.res.status(302).json(props.payload);
  }
  static SeeOther(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 303;
    return props.res.status(303).json(props.payload);
  }
  static r303(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 303;
    return props.res.status(303).json(props.payload);
  }
  static NotModified(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 304;
    return props.res.status(304).json(props.payload);
  }
  static r304(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 304;
    return props.res.status(304).json(props.payload);
  }
  static UseProxy(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 305;
    return props.res.status(305).json(props.payload);
  }
  static r305(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 305;
    return props.res.status(305).json(props.payload);
  }
  static TemproraryRedirect(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 307;
    return props.res.status(307).json(props.payload);
  }
  static r307(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 307;
    return props.res.status(307).json(props.payload);
  }
  static PermanentRedirect(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 308;
    return props.res.status(308).json(props.payload);
  }
  static r308(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 308;
    return props.res.status(308).json(props.payload);
  }
  static BadRequest(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 400;
    return props.res.status(400).json(props.payload);
  }
  static r400(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 400;
    return props.res.status(400).json(props.payload);
  }
  static Unauthorized(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 401;
    return props.res.status(401).json(props.payload);
  }
  static r401(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 401;
    return props.res.status(401).json(props.payload);
  }
  static PaymentRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 402;
    return props.res.status(402).json(props.payload);
  }
  static r402(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 402;
    return props.res.status(402).json(props.payload);
  }
  static Forbidden(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 403;
    return props.res.status(403).json(props.payload);
  }
  static r403(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 403;
    return props.res.status(403).json(props.payload);
  }
  static NotFound(props: { res: Response; payload: CustomResponse | any  }): Response {
    props.payload.status = 404;
    return props.res.status(404).json(props.payload);
  }
  static r404(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 404;
    return props.res.status(404).json(props.payload);
  }
  static MethodNotAllowed(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 405;
    return props.res.status(405).json(props.payload);
  }
  static r405(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 405;
    return props.res.status(405).json(props.payload);
  }
  static NotAcceptable(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 406;
    return props.res.status(406).json(props.payload);
  }
  static r406(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 406;
    return props.res.status(406).json(props.payload);
  }
  static ProxyAuthenticationRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 407;
    return props.res.status(407).json(props.payload);
  }
  static r407(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 407;
    return props.res.status(407).json(props.payload);
  }
  static RequestTimeout(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 408;
    return props.res.status(408).json(props.payload);
  }
  static r408(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 408;
    return props.res.status(408).json(props.payload);
  }
  static Conflict(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 409;
    return props.res.status(409).json(props.payload);
  }
  static r409(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 409;
    return props.res.status(409).json(props.payload);
  }
  static Gone(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 410;
    return props.res.status(410).json(props.payload);
  }
  static r410(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 410;
    return props.res.status(410).json(props.payload);
  }
  static LengthRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 411;
    return props.res.status(411).json(props.payload);
  }
  static r411(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 411;
    return props.res.status(411).json(props.payload);
  }
  static PreconditionFailed(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 412;
    return props.res.status(412).json(props.payload);
  }
  static r412(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 412;
    return props.res.status(412).json(props.payload);
  }
  static PayloadTooLarge(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 413;
    return props.res.status(413).json(props.payload);
  }
  static r413(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 413;
    return props.res.status(413).json(props.payload);
  }
  static RequestURITooLong(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 414;
    return props.res.status(414).json(props.payload);
  }
  static r414(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 414;
    return props.res.status(414).json(props.payload);
  }
  static UnsupportedMediaType(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 415;
    return props.res.status(415).json(props.payload);
  }
  static r415(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 415;
    return props.res.status(415).json(props.payload);
  }
  static RequestedRangeNotSatisfied(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 416;
    return props.res.status(416).json(props.payload);
  }
  static r416(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 416;
    return props.res.status(416).json(props.payload);
  }
  static ExpectationFailed(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 417;
    return props.res.status(417).json(props.payload);
  }
  static r417(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 417;
    return props.res.status(417).json(props.payload);
  }
  static ImATeapot(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 418;
    return props.res.status(418).json(props.payload);
  }
  static r418(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 418;
    return props.res.status(418).json(props.payload);
  }
  static MisdirectedRequest(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 421;
    return props.res.status(421).json(props.payload);
  }
  static r421(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 421;
    return props.res.status(421).json(props.payload);
  }
  static UnprocessableEntity(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 422;
    return props.res.status(422).json(props.payload);
  }
  static r422(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 422;
    return props.res.status(422).json(props.payload);
  }
  static Locked(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 423;
    return props.res.status(423).json(props.payload);
  }
  static r423(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 423;
    return props.res.status(423).json(props.payload);
  }
  static UpgradeRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 426;
    return props.res.status(426).json(props.payload);
  }
  static r426(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 426;
    return props.res.status(426).json(props.payload);
  }
  static PreconditionRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 428;
    return props.res.status(428).json(props.payload);
  }
  static r428(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 428;
    return props.res.status(428).json(props.payload);
  }
  static TooManyRequests(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 429;
    return props.res.status(429).json(props.payload);
  }
  static r429(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 429;
    return props.res.status(429).json(props.payload);
  }
  static RequestHeaderFieldsTooLarge(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 431;
    return props.res.status(431).json(props.payload);
  }
  static r431(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 431;
    return props.res.status(431).json(props.payload);
  }
  static ConnectionClosedWithoutResponse(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 444;
    return props.res.status(444).json(props.payload);
  }
  static r444(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 444;
    return props.res.status(444).json(props.payload);
  }
  static UnavailableForLegalReasons(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 451;
    return props.res.status(451).json(props.payload);
  }
  static r451(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 451;
    return props.res.status(451).json(props.payload);
  }
  static ClientClosedRequest(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 499;
    return props.res.status(499).json(props.payload);
  }
  static r499(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 499;
    return props.res.status(499).json(props.payload);
  }
  static InternalServerError(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 500;
    return props.res.status(500).json(props.payload);
  }
  static r500(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 500;
    return props.res.status(500).json(props.payload);
  }
  static NotImplemented(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 501;
    return props.res.status(501).json(props.payload);
  }
  static r501(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 501;
    return props.res.status(501).json(props.payload);
  }
  static BadGateway(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 502;
    return props.res.status(502).json(props.payload);
  }
  static r502(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 502;
    return props.res.status(502).json(props.payload);
  }
  static ServiceUnavailable(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 503;
    return props.res.status(503).json(props.payload);
  }
  static r503(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 503;
    return props.res.status(503).json(props.payload);
  }
  static GatewayTimeout(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 504;
    return props.res.status(504).json(props.payload);
  }
  static r504(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 504;
    return props.res.status(504).json(props.payload);
  }
  static HTTPVersionNotSupported(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 505;
    return props.res.status(505).json(props.payload);
  }
  static r505(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 505;
    return props.res.status(505).json(props.payload);
  }
  static VariantAlsoNegotiates(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 506;
    return props.res.status(506).json(props.payload);
  }
  static r506(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 506;
    return props.res.status(506).json(props.payload);
  }
  static InsufficientStorage(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 507;
    return props.res.status(507).json(props.payload);
  }
  static r507(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 507;
    return props.res.status(507).json(props.payload);
  }
  static LoopDetected(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 508;
    return props.res.status(508).json(props.payload);
  }
  static r508(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 508;
    return props.res.status(508).json(props.payload);
  }
  static NotExtended(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 510;
    return props.res.status(510).json(props.payload);
  }
  static r510(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 510;
    return props.res.status(510).json(props.payload);
  }
  static NetworkAuthenticationRequired(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 511;
    return props.res.status(511).json(props.payload);
  }
  static r511(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 511;
    return props.res.status(511).json(props.payload);
  }
  static NetworkConnectTimeoutError(props: {
    res: Response;
    payload: CustomResponse | any;
  }): Response {
    props.payload.status = 599;
    return props.res.status(599).json(props.payload);
  }
  static r599(props: { res: Response; payload: CustomResponse | any }): Response {
    props.payload.status = 599;
    return props.res.status(599).json(props.payload);
  }
}