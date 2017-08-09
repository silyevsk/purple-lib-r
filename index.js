import LibQ from 'purple-lib-q';

export default class LibR {
  static version() {
    return '1.0.1';
  }

  static libQVersion() {
    return LibQ.version();
  }
}