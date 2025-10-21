import { NextResponse } from 'next/server';

export default function (request) {
  // Logic xử lý Middleware của bạn
  return NextResponse.next();
}