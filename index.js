import LibQ from 'purple-lib-q';

export default class LibR {
  static version() {
    return '1.0.0';
  }

  static libQVersion() {
    return LibQ.version();
  }
}