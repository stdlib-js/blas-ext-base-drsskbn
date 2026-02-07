<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# drsskbn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.

<section class="intro">

The [residual sum of squares][wikipedia-residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="d = \sum_{i=0}^{N-1} (y_i - x_i)^2" alt="Equation for residual sum of squares."> -->

```math
\mathop{\mathrm{RSS}} = \sum_{i=0}^{N-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="d = \sum_{i=0}^{N-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="" alt="residual sum of squares.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-drsskbn
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var drsskbn = require( '@stdlib/blas-ext-base-drsskbn' );
```

#### drsskbn( N, x, strideX, y, strideY )

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 1.0, 1.0, -4.0 ] );

var z = drsskbn( x.length, x, 1, y, 1 );
// returns 45.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in strided arrays are accessed at runtime. For example, to compute the [residual sum of squares][wikipedia-residual-sum-of-squares] of every other element in `x` and `y`

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var z = drsskbn( x.length, x, 1, y, 1 );
// returns 72.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 8.0, -2.0, 3.0, -2.0, 7.0, -2.0, 0.0, -1.0 ] );

var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var z = drsskbn( 4, x1, 2, y1, 2 );
// returns 50.0
```

#### drsskbn.ndarray( N, x, strideX, offsetX,  y, strideY, offsetY )

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 1.0, 1.0, -4.0 ] );

var z = drsskbn.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns 45.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [residual sum of squares][wikipedia-residual-sum-of-squares] for every other element in `x` and `y` starting from the second element

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 6.0 ] );
var y = new Float64Array( [ 8.0, -2.0, 3.0, -2.0, 7.0, -2.0, 0.0, -1.0, 4.0 ] );

var z = drsskbn.ndarray( 4, x, 2, 1, y, 2, 1 );
// returns 50.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var drsskbn = require( '@stdlib/blas-ext-base-drsskbn' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -50, 50, opts );
console.log( x );

var y = discreteUniform( 10, -50, 50, opts );
console.log( y );

var d = drsskbn( x.length, x, 1, y, 1 );
console.log( d );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/drsskbn.h"
```

#### stdlib_strided_drsskbn( N, \*X, strideX, \*Y, strideY )

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 1.0, 1.0, -4.0 };

double z = stdlib_strided_drsskbn( 3, x, 1, y, 1 );
// returns 45.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
double stdlib_strided_drsskbn( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY );
```

<!--lint ignore maximum-heading-length-->

#### stdlib_strided_drsskbn_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!--lint enable maximum-heading-length-->

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 2.0 };
const double y[] = { 1.0, 1.0, -4.0 };

double v = stdlib_strided_drsskbn_ndarray( 3, x, 1, 0, y, 1, 0 );
// returns 45.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
double stdlib_strided_drsskbn_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/drsskbn.h"
#include <stdio.h>

int main( void ) {
    // Create two strided arrays:
    const double x[] = { 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 };
    const double y[] = { 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride lengths:
    const int strideX = 1;
    const int strideY = 1;

    // Compute the residual sum of squares of `x` and `y`:
    double d = stdlib_strided_drsskbn( N, x, strideX, y, strideY );

    // Print the result:
    printf( "rss: %lf\n", d );

    // Specify index offsets:
    const int offsetX = 1;
    const int offsetY = 1;

    // Compute the residual sum of squares of `x` and `y` with offsets:
    d = stdlib_strided_drsskbn_ndarray( N, x, strideX, offsetX, y, strideY, offsetY );

    // Print the result:
    printf( "rss: %lf\n", d );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-drsskbn.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-drsskbn

[test-image]: https://github.com/stdlib-js/blas-ext-base-drsskbn/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-drsskbn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-drsskbn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-drsskbn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-drsskbn/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-drsskbn/main/LICENSE

[wikipedia-residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

</section>

<!-- /.links -->
