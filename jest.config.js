module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true, // 커버리지 수집 활성화
  collectCoverageFrom: ['src/**/*.ts'], // 커버리지 수집 대상 파일
  coverageDirectory: 'coverage', // 커버리지 리포트 출력 디렉토리
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // 사용할 커버리지 리포터
};
