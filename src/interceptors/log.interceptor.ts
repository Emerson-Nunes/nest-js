import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LogInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const dt = Date.now();

    return next.handle().pipe(
      tap(() => {
        const request: any = context.switchToHttp().getRequest();

        console.log(`URL: http://localhost:3000${request.url}`);
        console.log(`METHOD: ${request.method.toLowerCase()}`);

        console.log(`EXECUTION TIME: ${Date.now() - dt} ms.`);
      }),
    );
  }
}
